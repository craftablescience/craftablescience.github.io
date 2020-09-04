// Made using https://www.w3schools.com/howto/howto_js_slideshow.asp

var pictures = ["/assets/about/rare_photo_of_me_in_tie.jpg",
                "/assets/about/coding.png",
                "/assets/about/cr_swim_back.jpg",
                "/assets/about/cr_swim_front.jpg"];

var companion = document.getElementById("slideshow-companion");

var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
    switch (slideIndex) {
        case 1:
            companion.src = pictures[0];
            break;
        case 2:
            companion.src = pictures[1];
        case 3:
            let flip = Math.random();
            if (flip > 0.5) {
                companion.src = pictures[2];
            } else {
                companion.src = pictures[3];
            }
    }
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}
