const imageContainer = document.querySelector(".image-container");

//* On Click events, to let the browser know to scroll to the next image
const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");

chevronRight.addEventListener("click", (e) => {
	imageContainer.scrollLeft += imageContainer.clientWidth;
});

chevronLeft.addEventListener("click", (e) => {
	imageContainer.scrollLeft -= imageContainer.clientWidth;
});

//* This is an observer, it will add a class of "show" to the element when it is in view
//* And the CSS will animate it in
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
	observer.observe(element);
});
