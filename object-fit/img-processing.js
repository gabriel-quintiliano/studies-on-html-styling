const defaultImg = document.querySelector("img#default-img"); // #default-img image
const comparisonImgTags = document.querySelectorAll("img:not(img#default-img)"); // All img tags but the #default-img image
const fileInput = document.querySelector("input[type='file']"); // input where the new img file is gonna be loaded

function setComparisonImages(newImgSrc) {
    for (img of comparisonImgTags) {
        img.src = newImgSrc;
    }
}

setComparisonImages(defaultImg.src);

// function handleImage(imgFile) {

// }