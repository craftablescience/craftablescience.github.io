var pictures = ["/assets/about/rare_photo_of_me_in_tie.jpg",
                "/assets/about/coding.png",
                "/assets/about/cr_swim_back.jpg",
                "/assets/about/cr_swim_front.jpg"];

var slides = document.getElementsByClassName("slide");
var companion = document.getElementById("slideshow-companion");

var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    var i;
    
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
    
    switch (slideIndex) {
        case 1:
            companion.src = pictures[0];
            break;
        case 2:
            companion.src = pictures[1];
            break;
        case 3:
            let flip = Math.random();
            if (flip > 0.5) {
                companion.src = pictures[2];
            } else {
                companion.src = pictures[3];
            }
            break;
    }
}

// This function taken from "https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php"
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AGE = calculate_age(new Date(2003, 5, 14));

Array.prototype.forEach.call(document.getElementsByClassName("var-changer"), function(node) {
    node.innerHTML = node.innerHTML.replace("[AGE_VAR]", parseInt(AGE)).replace("[SLIDE_COUNT]", parseInt(slides.length));
});
