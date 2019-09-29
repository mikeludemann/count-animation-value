function count(countStart,countEnd,speed,element){

	objects = {
		countStart: countStart,
		countEnd: countEnd,
		speed: speed
	}

	this.running = function(){

		let startTime = objects.countStart,
			speed = objects.speed,
			countEnd = objects.countEnd;

		let increment = startTime < countEnd ? 1 : -1;

		timing = setInterval(function(){

			startTime += increment;
			element.innerHTML = startTime;

			if(startTime == countEnd){

				clearInterval(timing);

			}

		}, speed);

	}

}
