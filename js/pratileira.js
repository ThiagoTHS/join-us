var slideIndex = 1;
mostraSlides(slideIndex);

function maisSlides(n) {
	mostraSlides(slideIndex += n);
}
function mostraSlides(n) {
	var i;
	var slide = document.getElementsByClassName("mySlides2");

	if (n > slide.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slide.length}
	for (i = 0; i < slide.length; i++) {
	slide[i].style.display = "none";  
	}
	slide[slideIndex-1].style.display = "flex";
}