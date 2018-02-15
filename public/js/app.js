window.addEventListener('load', function(){
  const btn = document.getElementById('gtLocation');
  const responseContainer = document.getElementById('response-container');
  const weatherInformation = document.getElementById('weather-information');

  function getUbication() {
    function search() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
      }
    }

    let success = function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      localStorage.latitude = lat;
      localStorage.longitude = lng;
    }

    let error = function (error) {
      alert('Tenemos un problema con encontrar tu ubicación');
    }

    search();
  };

  getUbication();

  console.log(localStorage.latitude, localStorage.longitude)

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    getWeather();
  })



  let key = 'b6da4219d66ba326d6f8850b2359daa9';
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let darkSky = `https://api.darksky.net/forecast/${key}/` + localStorage.latitude + `,` + localStorage.longitude + `?lang=es`;
  
  function getWeather() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', proxy + darkSky);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
  }

  function handleError() {
    console.log('Se ha presentado un error');
  }

  function addNews() {
    responseContainer.classList.remove('d-none');
    const data = JSON.parse(this.responseText);
    
    console.log(data);

    const monday = document.getElementById('monday');
    const tuesday = document.getElementById('tuesday');
    const wednesday = document.getElementById('wednesday');
    const thursday = document.getElementById('thursday');
    const friday = document.getElementById('friday');
    const saturday = document.getElementById('saturday');
    const sunday = document.getElementById('sunday');
    
    monday.innerText = data.daily.data[0].summary;
    tuesday.innerText = data.daily.data[1].summary;
    wednesday.innerText = data.daily.data[2].summary;
    thursday.innerText = data.daily.data[3].summary;
    friday.innerText = data.daily.data[4].summary;
    saturday.innerText = data.daily.data[5].summary;
    sunday.innerText = data.daily.data[6].summary;   
  }
  
}) 

