const catOriginalUrl = 'pixel_cat_img.png';
const catSmilingUrl = 'pixel_cat_smiling.png';

document.addEventListener("DOMContentLoaded", function() {
    const catImage = document.getElementById('pixel_cat');
    catImage.addEventListener('mouseover', function() {
        this.src = catSmilingUrl;
    });
    catImage.addEventListener('mouseout', function() {
        this.src = catOriginalUrl;
    });
});