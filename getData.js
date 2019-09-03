require("!style-loader!css-loader!./weatherforecast.css");  //css
var script = document.createElement('script');
window.data = function(res) {
    window.localStorage.setItem('applyParams', JSON.stringify(res));
    Data = JSON.parse(window.localStorage.getItem('applyParams'));
    document.body.insertBefore(script, document.body.firstChild);
}

window.datanew = function(resnew) {
    window.localStorage.setItem('applyParamsnew', JSON.stringify(resnew));
    Datanew = JSON.parse(window.localStorage.getItem('applyParamsnew'));
    console.log(Datanew);
    location.reload();
}
window.Data = JSON.parse(window.localStorage.getItem('applyParams'));
var Datanew = JSON.parse(window.localStorage.getItem('applyParamsnew'));
if (Datanew.msg == 'ok') {
    Data = Datanew;
}
if(!Data){
    script.src = 'https://api.jisuapi.com/weather/query?appkey=c7d0b7a02369670e&city=西安&callback=data';
}
console.log(Data);
window.changeCity = function() {
    var city = document.getElementById('city').value || '西安';
    console.log(city);
    script.src = 'https://api.jisuapi.com/weather/query?appkey=c7d0b7a02369670e&city=' + city + '&callback=datanew';
    document.body.insertBefore(script, document.body.firstChild);
};
require('./operDom.js');
require('./canvas.js');
require('./img/12.png');
require('./img/17.png');
require('./img/21.png');
require('./img/26.png');
require('./img/5.png');
require('./img/day_3.jpg');
require('./img/day_2.jpg');
require('./img/day_1.jpg');
require('./img/day_0.jpg');
require('./img/day_1.jpg');
require('./img/i_localhost.png');
require('./img/i_water.png');
require('./img/i_wind.png');
require('./img/search_btn.png');
require('./img/w0.png');
require('./img/w1.png');
require('./img/w8.png');
require('./img/windmill.png');
require('./img/xtb_00.png');
require('./img/xtb_01.png');
require('./img/xtb_02.png');
require('./img/xtb_03.png');
require('./img/xtb_04.png');
require('./img/xtb_06.png');
require('./img/xtb_07.png');
require('./img/xtb_08.png');
