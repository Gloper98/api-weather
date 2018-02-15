onload = (()=> {
	let predictions = document.getElementById('predictions');
	
	let predictionPage = ()=> {
		window.location = 'views/week.html';
	}
	
	predictions.addEventListener('click', predictionPage);
})();