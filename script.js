const imageContainer = document.querySelector(".image-container");

const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");

chevronRight.addEventListener("click", (e) => {
	imageContainer.scrollLeft += imageContainer.clientWidth;
});

chevronLeft.addEventListener("click", (e) => {
	imageContainer.scrollLeft -= imageContainer.clientWidth;
});

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
	const { top, left, bottom, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;
	return partiallyVisible
		? ((top > 0 && top < innerHeight) ||
				(bottom > 0 && bottom < innerHeight)) &&
				((left > 0 && left < innerWidth) ||
					(right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const infoContainer = document.querySelector(".info-container");
document.addEventListener("scroll", (e) => {
	if (elementIsVisibleInViewport(infoContainer)) {
		infoContainer.classList.add("active");
	}
});
