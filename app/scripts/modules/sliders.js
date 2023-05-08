import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

var employeeSwiper = {};
var sliderType = window.innerWidth <= 991 ? 'mobile' : 'desktop';

const employeeSliderContent = document.querySelector('.employees__slider-content');

function initSlider(type) {
	var sliderSettings = {}
	if (type === 'mobile') {
		sliderSettings = {
			// описание настроек для мобильной вариации.
			effect: 'slide',
		}
	} else {
		sliderSettings = {
			// описание настроек для десктопной вариации.
			effect: 'fade',
			// allowTouchMove: false,
			fadeEffect: {
				crossFade: true
			},
		}
	}
	// Проверяем, есть ли в объекте слайдера метод destroy, и если есть - вызываем его.
	if (employeeSwiper.destroy && typeof employeeSwiper.destroy === 'function') {
		employeeSwiper.destroy(); // Возможно,если в круглые скобки передать true то будет лучше.
	}
	employeeSwiper = new Swiper(employeeSliderContent, {
		// configure Swiper to use modules
		...sliderSettings,
		modules: [EffectFade, Navigation, Pagination],
		wrapperClass: 'employees__slider-wrapper',
		slideClass: 'employees__slider-item',
		loop: false,
		centeredSlides: true,
		navigation: {
			nextEl: ".slider-arrow-next",
			prevEl: ".slider-arrow-prev",
		},
		pagination: {
			el: ".slider-pagination",
			type: 'bullets',
			clickable: true,
		},
	})
}
initSlider(sliderType)
window.addEventListener("resize", () => {
	if (window.innerWidth < 991.98 && sliderType == 'desktop') {
		sliderType = 'mobile'
		initSlider(sliderType)
	} else if (window.innerWidth > 991.98 && sliderType == 'mobile') {
		sliderType = 'desktop'
		initSlider(sliderType)
	}
});

const historySlider = document.querySelector('.history__slider');
const historySwiper = new Swiper(historySlider, {
	// configure Swiper to use modules
	modules: [EffectFade, Navigation, Pagination],
	wrapperClass: 'history__wrapper',
	slideClass: 'history__slide',
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	loop: false,
	navigation: {
		nextEl: ".slider-arrow-next",
		prevEl: ".slider-arrow-prev",
	},
	pagination: {
		el: ".slider-pagination",
		type: 'bullets',
		clickable: true,
	},
});
const advantagesSlider = document.querySelector('.advantages__wrapper');
const ourValuesSlider = document.querySelector('.our-values__wrapper');
let ourValuesSwiper = null;
let advantagesSwiper = null;
function sliderInit() {
	if (!advantagesSwiper) {
		advantagesSwiper = new Swiper(advantagesSlider, {
			modules: [Pagination],
			slidesPerView: 2,
			slideClass: 'advantages__item',
			wrapperClass: 'advantages__body',
			slidesPerGroup: 1,
			loop: false,
			spaceBetween: 0,
			watchSlidesProgress: true,
			pagination: {
				el: ".slider-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
			},
		});
	}
	if (!ourValuesSwiper) {
		ourValuesSwiper = new Swiper(ourValuesSlider, {
			modules: [Pagination],
			slideClass: 'our-values__item',
			wrapperClass: 'our-values__body',
			slidesPerGroup: 1,
			loop: false,
			spaceBetween: 40,
			initialSlide: 0,
			pagination: {
				el: ".slider-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				767.98: {
					slidesPerView: 2,
				},
			},
		});
	}
}
function sliderDestroy() {
	if (advantagesSwiper) {
		advantagesSwiper.destroy(); // Возможно,если в круглые скобки передать true то будет лучше.
		advantagesSwiper = null;
	}
	if (ourValuesSwiper) {
		ourValuesSwiper.destroy(); // Возможно,если в круглые скобки передать true то будет лучше.
		ourValuesSwiper = null;
	}
}
function stateWindow() {
	// Если ширина экрана меньше или равна mediaQuerySize(991.98)
	if (window.innerWidth < 991.98) {
		// Инициализировать слайдер если он ещё не был инициализирован
		sliderInit()
	} else if (window.innerWidth > 991.98) {
		// Уничтожить слайдер если он был инициализирован
		sliderDestroy()
	}
}
window.addEventListener('resize', stateWindow);
window.addEventListener('load', stateWindow);

// function mobSwiper() {
// 	if (window.innerWidth <= 991.98 && advantagesSlider.dataset.mobile == 'false') {
// 		mobileSwiperOurValues = new Swiper(ourValuesSlider, {
// 			modules: [Pagination],
// 			slideClass: 'our-values__item',
// 			wrapperClass: 'our-values__body',
// 			slidesPerGroup: 1,
// 			loop: false,
// 			spaceBetween: 40,
// 			initialSlide: 0,
// 			pagination: {
// 				el: ".slider-pagination",
// 				type: 'bullets',
// 				clickable: true,
// 			},
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 				},
// 				767.98: {
// 					slidesPerView: 2,
// 				},
// 			},
// 		});
// 		ourValuesSlider.dataset.mobile = 'true';
// 	};
// 	if (window.innerWidth > 991.98) {
// 		ourValuesSlider.dataset.mobile = 'false';
// 		if (ourValuesSlider.classList.contains('swiper-container-initialized')) {
// 			mobileSwiperOurValues.destroy();
// 		}
// 	}
// };
// mobSwiper();
// window.addEventListener('resize', () => {
// 	mobSwiper();
// });