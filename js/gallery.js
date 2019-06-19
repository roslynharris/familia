var slideIndex = 1;
showSlides(slideIndex);

// next/previous buttons
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassNames("mySlides");
	var dots = document.getElementsByClassNames("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].classNames = dots[i].classNames.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classNames += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}