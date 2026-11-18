
const pictures = document.querySelectorAll(".menu-item img");
const popup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closeButton = document.getElementById("close-popup");

pictures.forEach(function(picture) {
    picture.addEventListener("click", function() {
        if (window.innerWidth > 900) {
            popupImage.src = picture.src;
            popupImage.alt = picture.alt;
            popup.classList.add("open");
        }
    });
});

closeButton.addEventListener("click", function() {
    popup.classList.remove("open");
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.classList.remove("open");
    }
});
