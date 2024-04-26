var slider = document.querySelector(".slider");
var contentTitle = slider.querySelector(".content .content-wrapper h2");
var contentDes = slider.querySelector(".content .content-wrapper p");
var listSlide = slider.querySelector(".lists-slide");
var loading = document.querySelector(".loading");

var sliderApi = 
[
    {
        "urlImage": "http://localhost:8080/assets/image/slider/slider_1.png",
        "slideTitle": "Arena Of Valor",
        "slideDes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
    },
    {
        "urlImage": "http://localhost:8080/assets/image/slider/slider_2.png",
        "slideTitle": "PUBG",
        "slideDes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
    },
    {
        "urlImage": "http://localhost:8080/assets/image/slider/slider_3.png",
        "slideTitle": "Valorant",
        "slideDes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
    },
    {
        "urlImage": "http://localhost:8080/assets/image/slider/slider_4.png",
        "slideTitle": "League Of Lengends",
        "slideDes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
    }
];

const sliderLength = sliderApi.length;
var index = 1;

var handelTextDes = (text) => {
    var textArray = text.split(" ");
    const textArrayLength = textArray.length;
    var newLine = textArrayLength / 3;
    for (let i = newLine; i < textArrayLength; i += newLine) {
        textArray.splice(i, 0, "<br>");
    }
    return textArray.join(" ");
}

var handelTextTitle = (text) => {
    var textArray = text.split(" ");
    const mod = textArray.length / 2;
    if (textArray.length % 2 === 0) {
        textArray.splice(mod - 1, 0, "<span>");
        textArray.splice(mod + 2, 0, "</span>");
        return textArray.join(" ");
    }
    textArray.splice(mod, 0, "<span>");
    textArray.splice(mod + 2, 0, "</span>");
    return textArray.join(" ");
}

function updateSlidenumber(indexActive) {
    var listNumSli = slider.querySelectorAll(".number-slider");
    listNumSli[indexActive].classList.add("active");
    
    if (indexActive === 0) {
        listNumSli[sliderLength - 1].classList.remove("active");
        return;
    }
    listNumSli[indexActive - 1].classList.remove("active");
}

(function() {
    var childNode = "";
    for (let i = 0; i < sliderLength; i++) {
        if (i === 0) {
            childNode += '<div class="number-slider active">' + ('0'+ (i + 1)) + '</div>';
        }

        if (i >= 1 && i <= 9) {
            childNode += '<div class="number-slider">' + ('0'+ (i + 1)) + '</div>';
        }

        if (i > 9) {
            childNode += '<div class="number-slider">' + (i + 1) + '</div>';
        }
    }

    slider.style.backgroundImage = 'url("' + sliderApi[0].urlImage + '"';
    contentTitle.innerHTML = handelTextTitle(sliderApi[0].slideTitle);
    contentDes.innerHTML = handelTextDes(sliderApi[0].slideDes);
    listSlide.innerHTML = childNode;
})()

window.addEventListener("load", () => {
    loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none";
        window.scrollTo(0, 0);
    }, 1500);
    updateSlide();
})

function updateSlide() {
    setInterval(() => {
        
        if (index === sliderLength) {
            index = 0;
        }
        slider.style.backgroundImage = 'url("' + sliderApi[index].urlImage + '"';
        contentTitle.innerHTML = handelTextTitle(sliderApi[index].slideTitle);
        contentDes.innerHTML = handelTextDes(sliderApi[index].slideDes);
        updateSlidenumber(index);
        console.log(index);
        index++;
    }, 5000);
}