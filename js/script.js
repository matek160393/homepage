{
    const togglePhotosView = () => {
        const photos = document.querySelector(".js-photos");
        photos.classList.toggle("article__photos--hidden");
        const photosButtonText = document.querySelector(".js-photosButtonText");
        buttonPhotos.innerText = photos.classList.contains("article__photos--hidden")
            ? "Wyświetl moje fotografie"
            : "Ukryj fotografie";
    }

    const onPhotosDisplay = () => {
        const buttonPhotos = document.querySelector(".js-buttonPhotos");
        buttonPhotos.addEventListener("click", togglePhotosView);
    };
    onPhotosDisplay();

    const toggleDrawingsView = () => {
        const drawings = document.querySelector(".js-drawings");
        drawings.classList.toggle("article__drawings--hidden");
        
        const buttonText = document.querySelector(".js-drawingsButtonText");
        buttonText.innerText = drawings.classList.contains(".js-drawingsButtonText")
            ? "Wyświetl moje rysunki"
            : "Ukryj rysunki";
    }

    const onDrawingsDisplay = () => {
        const buttonDrawings = document.querySelector(".js-buttonDrawings");
        buttonDrawings.addEventListener("click", toggleDrawingsView);
    }
    onDrawingsDisplay();

    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();
};