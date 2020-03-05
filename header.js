var path = location.pathname;
var obj = null;
var img = document.getElementById("header-menu-maru");
if (path == "/Users/tajimashinji/Documents/Workbench/web/WebDevelopment/index-ja.html") {
    obj = document.getElementById("header-menu-index");
}
//色の指定
obj.style.backgroundColor = "#ffdabf";

//現在いるページ名を抽出
var result = path.split('/');
result = result[result.length-1].split('-')
function en() {
    var thisURL = result[0]+'-en.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
function ja(){
    var thisURL = result[0]+'-ja.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
function fr(){
    var thisURL = result[0]+'-fr.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
