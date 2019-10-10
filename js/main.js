let prevBg = document.getElementById('prev-bg');
let nextBg = document.getElementById('next-bg');
let header = document.getElementById('header');
let sliderName = document.getElementById('slider-name');
let sliderText = document.getElementById('slider-text');
let sliderLink = document.getElementById('slider-link');
let hideList = document.getElementById('nav__main__hides');
let aboutHide = document.getElementById('nav__main__hides-link-about');
let about = document.getElementById('nav__main-link__active');

let slideCounter = 2;
hideList.onmouseover = unHide;
hideList.onmouseout = hide;
prevBg.onclick = sliderLeft;
nextBg.onclick = sliderRight;
function unHide(){
	aboutHide.style="display: inline-block; margin-top: 8px";
	hideList.style = "margin-top: 22px"
}
function hide(){
	aboutHide.style="display: none;";
	hideList.style = "margin-top: 0px"
}
function changeSliderContext(c){
	switch (c) {
		case 1:
			sliderName.textContent="Kazan";
			sliderText.textContent="Kazan fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://www.google.com"); 
			break;
		case 2:
			sliderName.textContent="San-Fracisco";
			sliderText.textContent="San-Fracisco fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://mail.yandex.ru"); 
			break;
		case 3:
			sliderName.textContent="New York";
			sliderText.textContent="New York fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://vk.com"); 
			break;
	}
}
function sliderLeft(){
	slideCounter--;
	slideCounter = (slideCounter == 0) ? 3 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
	changeSliderContext(slideCounter);
}
function sliderRight(){
	slideCounter++;
	slideCounter = (slideCounter == 4) ? 1 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
	changeSliderContext(slideCounter);
}