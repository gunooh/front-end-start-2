var template = document.getElementById('searchListTemplate').innerHTML;
var searchList = document.getElementById('search-list');

var apikey = "be1e89c0e9d30433eb906ad6f5fc6ea8";
var apiurl = "https://apis.daum.net/search/vclip?output=json&apikey=" + apikey;

var button = document.getElementById('searchBtn');
var nextBtn = document.getElementById('nextBtn');
var nPage = 1;
var nMaxPage = 3;

function Render(wrap, template, data){
    var html = tmpl(template, {list: data});
    
    if(wrap.innerHTML == ''){
        wrap.innerHTML = html;
    } else {
        wrap.innerHTML += html;
    }
}

button.addEventListener('click', function(e){
    var url = apiurl;
    var keyword = edit.value;
    
    searchList.innerHTML='';
    nPage = 1;
    nextBtn.style.display = 'block';
    
    url += '&q=' + keyword;
    url += '&pageno=' + 1;
    
    getJSON(url, function(res){
        Render(searchList, template, res.channel.item);
    });
});
nextBtn.addEventListener('click', function(e){
    var url = apiurl;
    var keyword = edit.value;
    
    if(nPage < nMaxPage){
        nPage++;
    }
    if(nPage == nMaxPage){
        nextBtn.style.display = 'none';
    }
    
    url += '&q=' + keyword;
    url += '&pageno=' + nPage;
    
    getJSON(url, function(res){
        Render(searchList, template, res.channel.item);
    });
});
