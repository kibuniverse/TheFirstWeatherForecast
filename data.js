require("!style-loader!css-loader!./weatherforecast.css");
var script = document.createElement('script');
window.data = function(res) {
	window.localStorage.setItem('applyParams', JSON.stringify(res));
	Data = JSON.parse(window.localStorage.getItem('applyParams'));
	console.log(Data);
	document.body.insertBefore(script, document.body.firstChild);
}
window.datanew = function(resnew) {
	window.localStorage.setItem('applyParamsnew', JSON.stringify(resnew));
	Datanew = JSON.parse(window.localStorage.getItem('applyParamsnew'));
	console.log(Datanew);
	location.reload();
}
Data = JSON.parse(window.localStorage.getItem('applyParams'));
var Datanew = JSON.parse(window.localStorage.getItem('applyParamsnew'));;
if(Datanew.msg == 'ok'){
		Data = Datanew;
}
console.log(Data);
if (Data.msg != 'ok') {
    alert('您的输入有误，请检查后再输入！');
}
window.changeCity = function() {
    var city = document.getElementById('city').value || '西安';
    console.log(city);
	script.src = 'https://api.jisuapi.com/weather/query?appkey=c7d0b7a02369670e&city='+city+'&callback=datanew';
	document.body.insertBefore(script, document.body.firstChild);
};

document.getElementById('today_date_y').innerHTML = Data.result.date;
document.getElementById('today_temper').innerHTML = Data.result.temp;
document.getElementById('i_localhost').innerHTML  = Data.result.city;
document.getElementById('humidity').innerHTML = '湿度  ' + Data.result.humidity + '%';
document.getElementById('wind').innerHTML = Data.result.winddirect + Data.result.windpower;
document.getElementById('today_weather').innerHTML = Data.result.weather;
document.getElementById('top-dressing_advice').innerHTML = Data.result.aqi.aqiinfo.measure;
document.getElementById('updata').innerHTML = '~更新于' + Data.result.updatetime;
var body = document.getElementsByTagName('body')[0];
switch(Data.result.img){
	case '0':
		body.style.background = 'url(img/day_0.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;
	case '1':
		body.style.background = 'url(img/day_1.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;temp
	case '2':
		body.style.background = 'url(img/day_1.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;
	case '3':
		body.style.background = 'url(img/day_3.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;
	case '4':
		body.style.background = 'url(img/day_3.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;
	case '5':
		body.style.background = 'url(img/day_3.jpg)';
		body.style.backgroundSize = '100% 100%';
		break;
}
document.getElementById('leftbtn').addEventListener('click', function() {
    if(parseInt(drawing.style.left) <= -10){
    	var distant = 0;
    	var timer = setInterval(function () {
    		distant += 2;
    		drawing.style.left = parseInt(drawing.style.left) + 2 + 'px';
    		if(distant >= 60){
    			clearInterval(timer);
    		}
    	}, 2);
    }
}, false);
document.getElementById('rightbtn').onclick = function() {
	if(parseInt(drawing.style.left) >= -1320){
    	var distant = 0;
    	var timer = setInterval(function () {
    		distant += 1;
    		drawing.style.left = parseInt(drawing.style.left) - 1 + 'px';
    		if(distant >= 60){
    			clearInterval(timer);
    		}
    	}, 1);
    }
}

document.getElementById('winddytext').innerHTML = "风速" + Data.result.windspeed + 'm/s';
document.getElementsByClassName('winddy')[0].getElementsByTagName('img')[0].style.WebkitAnimation = 'rot '+ (8 - Data.result.windspeed) + 's linear infinite';
var lifeli = document.getElementsByClassName('lifeli');
var indexArray = Data.result.index;
for(var i = 0; i < 4; i ++) {
	lifeli[i].getElementsByTagName('div')[0].innerHTML = indexArray[i+1].detail;
	lifeli[i].getElementsByTagName('p')[0].innerHTML = indexArray[i+1].ivalue;
}		
var leftinfo = document.getElementsByClassName('leftinfo');
var Array = Data.result.daily;   //让未来7天的天气数据储存再Array数组中
console.log(Array);
for(var i = 0; i < 7; i++){
	var li = leftinfo[i].getElementsByTagName('li');
	li[0].innerHTML = Array[i].date;
	li[1].innerHTML = Array[i].week;
	li[2].getElementsByTagName('span')[0].innerHTML = Array[i].day.weather;
	li[2].getElementsByTagName('img')[0].src = 'img/xtb_0' + Array[i].day.img + '.png';
	li[3].innerHTML = Array[i].night.templow + ' / ' + Array[i].day.temphigh;
	li[4].innerHTML = Array[i].day.winddirect;
}
var drawing = document.getElementById('drawing');
var tempArray = Data.result.hourly;
if (drawing.getContext) {
	var context = drawing.getContext('2d');
	context.strokeStyle = 'white';
	context.fillStyle = 'white';
	context.beginPath();
	context.font="18px Arial";
	context.textAlign = 'conter';
	context.textBaseline = 'middle';
	var min = mintemp();
	var begin = 20;
	context.lineWidth = 4;
	context.moveTo(begin, (parseInt(tempArray[0].temp) - min) * 4);
	context.arc(begin,(parseInt(tempArray[0].temp) - min) * 4, 4, 0, 2 * Math.PI, false);
	context.fillText(tempArray[0].time, begin, 180);
	context.fillText(tempArray[0].temp, begin,(parseInt(tempArray[0].temp) - min) * 4 - 10);
	begin+=80;
   	for(var i = 1; i < 24; i++, begin+=80){
   		context.lineTo(begin,(parseInt(tempArray[i].temp) - min) * 4);
   		context.arc(begin,(parseInt(tempArray[i].temp) - min) * 4, 4, 0, 2 * Math.PI, false);
   		context.fillText(tempArray[i].time, begin, 180);
   		context.fillText(tempArray[i].temp, begin,(parseInt(tempArray[i].temp) - min) * 4 - 10);
	}
    context.stroke();
    context.closePath();
    context.restore();
	
}
function mintemp() {
	var min = 0;
	for(var i = 0; i < 24; i++){
		if(parseInt(tempArray[i].temp) < min){
			min = parseInt(tempArray[i].temp);
		}
	}
	return min;
}