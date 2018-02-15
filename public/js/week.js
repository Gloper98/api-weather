onload = (() => {
	let back = document.getElementById('back');
	let one = document.getElementById('one');
	let two = document.getElementById('two');
	let three = document.getElementById('three');
	let four = document.getElementById('four');
	let five = document.getElementById('five');
	let six = document.getElementById('six');
	let seven = document.getElementById('seven');
	let first = document.getElementById('first');
	let second = document.getElementById('second');
	let third = document.getElementById('third');
	let fourth = document.getElementById('fourth');
	let fifth = document.getElementById('fifth');
	let sixth = document.getElementById('sixth');
	let seventh = document.getElementById('seventh');
	let currentPlace = JSON.parse(localStorage.getItem('currentPlace'));
	let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];
	let d = new Date();
	let n = d.getDay();
	console.log(currentPlace.daily.data);
	
	first.innerText = days[n+1];
	second.innerText = days[n+2];
	third.innerText = days[n+3];
	fourth.innerText = days[n+4];
	fifth.innerText = days[n+5];
	sixth.innerText = days[n+6];
	seventh.innerText = days[n+7];
	
	one.innerText = `${currentPlace.daily.data[1].apparentTemperatureMin}°-${currentPlace.daily.data[1].apparentTemperatureMax}°`;
	two.innerText = `${currentPlace.daily.data[2].apparentTemperatureMin}°-${currentPlace.daily.data[2].apparentTemperatureMax}°`;
	three.innerText = `${currentPlace.daily.data[3].apparentTemperatureMin}°-${currentPlace.daily.data[3].apparentTemperatureMax}°`;
	four.innerText = `${currentPlace.daily.data[4].apparentTemperatureMin}°-${currentPlace.daily.data[4].apparentTemperatureMax}°`;
	five.innerText = `${currentPlace.daily.data[5].apparentTemperatureMin}°-${currentPlace.daily.data[5].apparentTemperatureMax}°`;
	six.innerText = `${currentPlace.daily.data[6].apparentTemperatureMin}°-${currentPlace.daily.data[6].apparentTemperatureMax}°`;
	seven.innerText = `${currentPlace.daily.data[7].apparentTemperatureMin}°-${currentPlace.daily.data[7].apparentTemperatureMax}°`;
	
	let principalView = () => {
		window.location = '../index.html';
	}
	back.addEventListener('click', principalView);
})();