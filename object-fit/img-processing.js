const defaultImg = document.querySelector("img#default-img"); // #default-img image
const comparisonImgTags = document.querySelectorAll("img:not(img#default-img)"); // All img tags but the #default-img image
const fileInput = document.querySelector("input[type='file']"); // input where the new img file is gonna be loaded
const fileReader = new FileReader(); // that's the object that's gonna read and make it possible to display the new img

function setComparisonImages(newImgSrc) {
    for (img of comparisonImgTags) {
        img.src = newImgSrc;
    }

    if (defaultImg.src !== newImgSrc) {
        defaultImg.src = newImgSrc;
    }
}

setComparisonImages(defaultImg.src); // to set the comparison images (based on the default it set) on the first time the page loads

function handleInputedImage() {
    const inputedFile = fileInput.files[0];
    fileReader.readAsDataURL(inputedFile);
}

function handleError() {
    alert("There was an error on the file reading, please upload the file once again");
}

fileReader.addEventListener("load", () => setComparisonImages(fileReader.result)); // event for when file is successfully read
fileReader.addEventListener("error", handleError); // event for when file cannot be read due to some error

fileInput.addEventListener("change", handleInputedImage);