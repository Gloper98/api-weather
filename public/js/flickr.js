const body = document.getElementsByTagName('body')[0];
let search = document.getElementById('search');

function backgroundChange(){
	body.style.backgroundImage = '../assets/img/path.jpg';
}

search.addEventListener('click', backgroundChange);

console.log(body);
