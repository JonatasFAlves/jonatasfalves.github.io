var images = [], x = -1;
images[0] = "assets/images/me2.png";
images[1] = "assets/images/me3.png";
images[2] = "assets/images/me1.png";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}