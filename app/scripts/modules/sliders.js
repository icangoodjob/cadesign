import Swiper, { Navigation, Pagination, EffectFade, EffectCreative } from 'swiper';

const employeeSliderContent = document.querySelector('.employees__slider-content');
const historySlider = document.querySelector('.history__slider');
const employeeSwiper = new Swiper(employeeSliderContent, {
	// configure Swiper to use modules
	modules: [EffectFade, Navigation, Pagination],
	wrapperClass: 'employees__slider-wrapper',
	slideClass: 'employees__slider-item',
	loop: false,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
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
});

const historySwiper = new Swiper(historySlider, {
	// configure Swiper to use modules
	modules: [EffectFade, EffectCreative, Navigation, Pagination],
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
const ourValuessSlider = document.querySelector('.our-values__wrapper');
let mobileSwiper;
let mobileSwiperOurValues;
function mobSwiper() {
	if (window.innerWidth <= 991.98 && advantagesSlider.dataset.mobile == 'false') {
		mobileSwiper = new Swiper(advantagesSlider, {
			modules: [Pagination],
			slidesPerView: 2,
			slideClass: 'advantages__item',
			wrapperClass: 'advantages__body',
			slidesPerGroup: 1,
			loop: false,
			spaceBetween: 0,
			initialSlide: 0,
			watchSlidesProgress: true,
			pagination: {
				el: ".slider-pagination",
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					watchSlidesProgress: true,
				},
			},
		});
		mobileSwiperOurValues = new Swiper(ourValuessSlider, {
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
		advantagesSlider.dataset.mobile = 'true';
		ourValuessSlider.dataset.mobile = 'true';
	};
	if (window.innerWidth > 991) {
		advantagesSlider.dataset.mobile = 'false';
		ourValuessSlider.dataset.mobile = 'false';
		if (advantagesSlider.classList.contains('swiper-container-initialized')) {
			mobileSwiper.destroy();
		}
		if (ourValuessSlider.classList.contains('swiper-container-initialized')) {
			mobileSwiperOurValues.destroy();
		}
	}
};
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});