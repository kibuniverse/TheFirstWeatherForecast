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
	var min = mintemp();   // 获取最小温度
	console.log('mintemp = ', min);
	var max = maxtemp();   // 获取最大温度
	console.log('maxtemp = ', max);
	var begin = 20;
	context.lineWidth = 4;
	context.moveTo(begin, (max + 4 - parseInt(tempArray[0].temp)) * 9);
	context.arc(begin,(max + 4 - parseInt(tempArray[0].temp)) * 9, 4, 0, 2 * Math.PI, false);
	context.fillText(tempArray[0].time, begin, 180);
	context.fillText(tempArray[0].temp, begin,(max + 4 - parseInt(tempArray[0].temp)) * 9 - 10);
	begin+=80;
   	for(var i = 1; i < 24; i++, begin+=80){
   		context.lineTo(begin,(max + 4 - parseInt(tempArray[i].temp)) * 9);
   		context.arc(begin,(max + 4 - parseInt(tempArray[i].temp)) * 9, 4, 0, 2 * Math.PI, false);
   		context.fillText(tempArray[i].time, begin, 180);
   		context.fillText(tempArray[i].temp, begin,(max + 4 - parseInt(tempArray[i].temp)) * 9 - 10);
	}
    context.stroke();
    context.closePath();
    context.restore();
	
}
function mintemp() {
	var min = tempArray[0].temp;
	for(var i = 0; i < 24; i++){
		if(parseInt(tempArray[i].temp) < min){
			min = parseInt(tempArray[i].temp);
		}
	}
	return min;
}
function maxtemp() {
	var max = tempArray[0].temp;
	for(var i = 0; i < 24; i++) {
		if(parseInt(tempArray[i].temp) > max){
			max = parseInt(tempArray[i].temp);
		}
	}
	return max;
}