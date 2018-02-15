function initGoogleAPI() {
	let inputContent = document.getElementById('place');
	let search = document.getElementById('search');
	let currentCity = document.getElementById('current-city');
	let wind = document.getElementById('wind');
	let humidity = document.getElementById('humidity');
	let uvIndex = document.getElementById('uvIndex');
	let pressure = document.getElementById('pressure');
	let temperature = document.getElementById('temperature');
	let inputAutocomplete = new google.maps.places.SearchBox(document.getElementById('place'));
	
	function searchPlace(event) {
		let city = inputAutocomplete.getPlaces()[0];
		let latitude = city.geometry.location.lat();
		let longitude = city.geometry.location.lng();
		let key = 'b6da4219d66ba326d6f8850b2359daa9';
		let darkSkyCall = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?lang=es`;
		let proxy = 'https://cors-anywhere.herokuapp.com/';
		
		$.ajax({
			url: proxy + darkSkyCall,
			success: function(data) {
				console.log(data);
				localStorage.setItem('currentPlace', JSON.stringify(data));
				currentCity.innerText = inputContent.value;
				wind.innerText = data.currently.windSpeed;
				temperature.innerText = data.currently.temperature;
				humidity.innerText = (data.currently.humidity) * 100;
				pressure.innerText = data.currently.pressure;
				uvIndex.innerText = data.currently.uvIndex;
			}
		})

	}
	
	search.addEventListener('click', searchPlace);
	
};