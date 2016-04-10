var template = document.getElementById('searchListTemplate').innerHTML;

var searchList = document.getElementById('search-list');
var button = document.getElementById('searchBtn');

var apikey = "be1e89c0e9d30433eb906ad6f5fc6ea8";
var apiurl = "https://apis.daum.net/search/vclip?output=json&apikey=" + apikey;

var nPage = 1;
var nMaxPage = 3;
var nPerPages = 10;

function Render(wrap, template, data){
    var html = tmpl(template, {list: data});
    
    if(wrap.innerHTML == ''){
        wrap.innerHTML = html;
    } else {
        wrap.innerHTML += html;
    }
}

function viewNextButton(bShow){
    var nextBtn = document.getElementById('nextBtn');
    
    if(bShow){
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
};

/* search button event */
button.addEventListener('click', function(e){
    var url = apiurl;
    var keyword = edit.value;;
    
    /* initialize */
    nPage = 1;
    searchList.innerHTML='';
    
    /* set URL */
    url += '&q=' + keyword;
    url += '&pageno=' + 1;
    
    getJSON(url, function(res){
        if(res.channel.item.length < nPerPages){
            viewNextButton(false);
        } else {
            viewNextButton(true);
        }
        
        Render(searchList, template, res.channel.item);
    });
});

/* more search button event */
nextBtn.addEventListener('click', function(e){
    var url = apiurl;
    var keyword = edit.value;
    
    /* initialize */
    if(nPage < nMaxPage){
        nPage++;
        
        if(nPage >= 3){
            viewNextButton(false);
        }
    }
    
    /* set URL */
    url += '&q=' + keyword;
    url += '&pageno=' + nPage;
    
    getJSON(url, function(res){
        if(res.channel.item.length < nPerPages){
            viewNextButton(false);
        }
        
        Render(searchList, template, res.channel.item);
    });
});
