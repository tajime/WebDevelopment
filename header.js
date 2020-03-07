var path = location.pathname;
console.log(path);
//現在いるページ名を抽出
var result = path.split('/');
result = result[result.length-1].split('-')
var obj = null;
var img = document.getElementById("header-menu-maru");
if (result[0] == "index") {
    obj = document.getElementById("header-menu-index");
}else if(result[0] == "intro"){
    obj = document.getElementById("header-menu-intro");
}else if(result[0] == "content"){
    obj = document.getElementById("header-menu-content");
}else if(result[0] == "facility"){
    obj = document.getElementById("header-menu-facility");
}else if(result[0] == "entranceExamination"){
    obj = document.getElementById("header-menu-ex");
}else if(result[0] == "access"){
    obj = document.getElementById("header-menu-access");
}else if(result[0] == "inquiry"){
    obj = document.getElementById("header-menu-inquiry");
}
//色の指定
obj.style.backgroundColor = "#ffdabf";

function en() {
    var thisURL = '../english/'+result[0]+'-en.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
function ja(){
    var thisURL = '../japanese/'+result[0]+'-ja.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
function fr(){
    var thisURL = '../french/'+result[0]+'-fr.html'
    window.location.href = thisURL; // 通常の遷移
    window.open(thisURL, '_blank'); // 新しいタブを開き、ページを表示
}
