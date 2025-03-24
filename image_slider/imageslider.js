
const images = [
    "https://tse2.mm.bing.net/th?id=OIP.7cRYFyLoDEDh4sRtM73vvwHaDg&pid=Api&P=0&h=180",
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg",
    "http://thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function updateImage() {
    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

updateImage();