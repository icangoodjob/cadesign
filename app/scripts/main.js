// import 'fslightbox'; // Lightbox: npm install fslightbox, site: https://fslightbox.com/javascript/documentation
// import Swiper from 'swiper'; // Slider: npm install swiper, site: https://swiperjs.com/get-started
// import AirDatepicker from 'air-datepicker'; // Datepicker: npm i air-datepicker -S, site: https://air-datepicker.com/ru

import './modules/sliders.js';

import './modules/choices.js';

import './modules/popups.js';

let iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
	let menuBody = document.querySelector(".menu");
	iconMenu.addEventListener("click", (event) => {
		document.body.classList.toggle('lock');
		event.currentTarget.classList.toggle("active");
		menuBody.classList.toggle("open");
	});
};

var ajax = new XMLHttpRequest();
ajax.open("GET", "images/icons/icons.svg", true);
ajax.send();
ajax.onload = function (e) {
	var div = document.createElement("div");
	div.innerHTML = ajax.responseText;
	document.body.insertBefore(div, document.body.childNodes[0]);
}