// * Slider
const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	loop: true,
	spaceBetween: 30,
	speed: 800,

	hashNavigation: {
		watchState: true,
	},

	on: {
		init: function () {
			let firstSlide = this.slides[0]
			firstSlide.style.opacity = 1
		},
		slideChange: function () {
			// Обработка всех слайдов
			this.slides.forEach((slide, index) => {
				slide.style.transition = 'opacity 1s ease-in-out'
				if (index === this.activeIndex) {
					// Плавное появление для активного слайда
					slide.style.opacity = 0
					setTimeout(() => (slide.style.opacity = 1), 10)
				} else {
					// Плавное исчезновение для остальных слайдов
					slide.style.opacity = 0
				}
			})
		},
	},
})


// * Скролл наверх при клике на ссылку
// Вложил тег а в див. Тег а скроллит слайдер, див скроллит вверх
document.querySelectorAll('.stickers__link-wrapper').forEach(wrapper => {
	wrapper.addEventListener('click', function (event) {
		// Плавный скроллинг к верху страницы
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
})


// * Показать все / скрыть
document.getElementById('toggleButton').addEventListener('click', function () {
	const content = document.getElementById('content')
	// Выдаем кнопке класс активности
	this.classList.toggle('active')

	if (content.classList.contains('expanded')) {
		content.classList.remove('expanded')
		this.textContent = 'Посмотреть все'
	} else {
		content.classList.add('expanded')
		this.textContent = 'Скрыть'
	}
})
