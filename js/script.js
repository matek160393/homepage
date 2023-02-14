{
    const togglePhotosView = () => {
        const photos = document.querySelector(".js-photos");
        photos.classList.toggle("article__photos--hidden");
        const photosButtonText = document.querySelector(".js-photosButtonText");
        photosButtonText.innerText = photos.classList.contains("article__photos--hidden")
            ? "Wyświetl moje fotografie"
            : "Ukryj fotografie";
    }

    const toggleDrawingsView = () => {
        const drawings = document.querySelector(".js-drawings");
        drawings.classList.toggle("article__drawings--hidden");
        const drawingsButtonText = document.querySelector(".js-drawingsButtonText");
        drawingsButtonText.innerText = drawings.classList.contains("article__drawings--hidden")
            ? "Wyświetl moje rysunki"
            : "Ukryj rysunki";
    }

    const init = () => {

        const welcome = () => {
            console.log("Cześć!");
        }
        welcome();

        const buttonDrawings = document.querySelector(".js-buttonDrawings");
        buttonDrawings.addEventListener("click", toggleDrawingsView);

        const buttonPhotos = document.querySelector(".js-buttonPhotos");
        buttonPhotos.addEventListener("click", togglePhotosView);

    }
    init();

    
   
};