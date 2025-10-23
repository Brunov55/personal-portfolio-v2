const catOriginalUrl = './pixel_cat_sitting.png';
const catStandingUrl = './pixel_cat_standing.png';

document.addEventListener("DOMContentLoaded", function() {
    const catImage = document.getElementById('pixel_cat');
    catImage.addEventListener('mouseover', function() {
        this.src = catStandingUrl;
    });
    catImage.addEventListener('mouseout', function() {
        this.src = catOriginalUrl;
    });
});