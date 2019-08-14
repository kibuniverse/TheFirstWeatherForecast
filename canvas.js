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