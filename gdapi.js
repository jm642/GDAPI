window.onLoad  = function(){
    var map = new AMap.Map('container');
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=ce66b6178f638010089a09f3dfbdabcb&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
