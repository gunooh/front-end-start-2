var template = document.getElementById('searchListTemplate').innerHTML;
var searchList = document.getElementById('search-list');

var nPage = 1;
var nMaxPage = 3;

var button = document.getElementById('searchBtn');
var nextBtn = document.getElementById('nextBtn');

button.addEventListener('click', function(e){
    var keyword = edit.value;
    var apikey = "be1e89c0e9d30433eb906ad6f5fc6ea8";
    var apiurl = "https://apis.daum.net/search/vclip?q=" + keyword + "&apikey=" + apikey + "&output=json&pageno=" + nPage;
    
    nextBtn.style.display = 'block';
    
    getJSON(apiurl, function(res){
        Render(searchList, template, res.channel.item);
    });
});
nextBtn.addEventListener('click', function(e){
    if(nPage < nMaxPage){
        nPage++;
    }
    else{
        nextBtn.style.display = 'none';
        return;
    }
    
    var keyword = edit.value;
    var apikey = "be1e89c0e9d30433eb906ad6f5fc6ea8";
    var apiurl = "https://apis.daum.net/search/vclip?q=" + keyword + "&apikey=" + apikey + "&output=json&pageno=" + nPage;
    
    getJSON(apiurl, function(res){
        RenderNext(searchList, template, res.channel.item);
    });
});


function Render(wrap, template, data){
    var html = tmpl(template, {list: data});
    
    wrap.innerHTML = html;
}
function RenderNext(wrap, template, data){
    var html = tmpl(template, {list: data});
    
    wrap.innerHTML += html;
}
