console.log("Cześć!");
let photos = document.querySelector(".js-photos");
let buttonPhotos = document.querySelector(".js-buttonPhotos");
let drawings = document.querySelector(".js-drawings");
let buttonDrawings = document.querySelector(".js-buttonDrawings");

buttonPhotos.addEventListener("click", () => {
    photos.classList.toggle("article__photos--hidden");
    
    buttonPhotos.innerText = photos.classList.contains("article__photos--hidden")
        ? "Wyświetl moje fotografie"
        : "Ukryj fotografie";
});

buttonDrawings.addEventListener("click", () => {
    drawings.classList.toggle("article__drawings--hidden");

    buttonDrawings.innerText = drawings.classList.contains("article__drawings--hidden")
        ? "Wyświetl moje rysunki"
        : "Ukryj rysunki";
});