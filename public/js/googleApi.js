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
	const body = document.getElementsByTagName('body')[0];																			 
	
	function searchPlace(latitude,longitude) {
		let key = 'b6da4219d66ba326d6f8850b2359daa9';
		let darkSkyCall = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?lang=es`;
		let proxy = 'https://cors-anywhere.herokuapp.com/';
		
		const photoRequest = new XMLHttpRequest();
		photoRequest.open('GET', 'https://api.flickr.com/flickr.photos.search');
		
		body.classList.remove('background-body');
		body.style.backgroundImage = 'url(assets/img/path.jpg)';
		
		$.ajax({
			url: proxy + darkSkyCall,
			success: function(data) {
				console.log(data);
				localStorage.setItem('currentPlace', JSON.stringify(data));
				wind.innerText = data.currently.windSpeed;
				temperature.innerText = data.currently.temperature;
				humidity.innerText = (data.currently.humidity) * 100;
				pressure.innerText = data.currently.pressure;
				uvIndex.innerText = data.currently.uvIndex;
			}
		})
	}
	
	function currentPosition(){
		if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
						let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
						let googleKey = 'AIzaSyCmOQCAXmOUaC07V4K0y74WChxflj9vw5I';
						let googlePosition = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=${googleKey}`;
						
						$.ajax({
							url: googlePosition,
							success: function(data) {
								currentCity.innerText = data.results[3].formatted_address;
							}
						})
						searchPlace(pos.lat,pos.lng);
					})
		  }
	}
	
	function inputSearch() {
		let city = inputAutocomplete.getPlaces()[0];
		let latitude = city.geometry.location.lat();
		let longitude = city.geometry.location.lng();
		currentCity.innerText = inputContent.value;
		searchPlace(latitude,longitude);
	}			
	
	currentPosition();
	search.addEventListener('click', inputSearch);
};