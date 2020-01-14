window.onLoad = function() {
  var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom: 12
  });

  Amap.plugin(['Amap.ToolBar', 'Amap.Driving', 'AMap.Geolocation']),
    function() {
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
      var driving = new Amap.Driving({
        map: map,
        panel: 'panel',
        policy: AMap.DrivingPolicy.LEAST_TIME,
        showTraffic: true
      });
      driving.search()
      var geolocation = new Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB', //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function(status,result){
         if(status=='complete'){
             onComplete(result)
         }else{
             onError(result)
         }
     });
    }
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=ce66b6178f638010089a09f3dfbdabcb&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
