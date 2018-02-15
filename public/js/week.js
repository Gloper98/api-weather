onload = (() => {
	let back = document.getElementById('back');
	let one = document.getElementById('one');
	let two = document.getElementById('two');
	let three = document.getElementById('three');
	let four = document.getElementById('four');
	let five = document.getElementById('five');
	let six = document.getElementById('six');
	let seven = document.getElementById('seven');
	let currentPlace = JSON.parse(localStorage.getItem('currentPlace'));
	
	let principalView = () => {
		window.location = '../index.html';
	}
	back.addEventListener('click', principalView);
})();