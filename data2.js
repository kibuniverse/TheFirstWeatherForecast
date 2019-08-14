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