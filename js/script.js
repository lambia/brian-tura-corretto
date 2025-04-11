let photoContainer = document.getElementById('photo-container');

// Effettuo la chiamata axios
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(resp => {
        const photos = resp.data;
        console.log(photos);
        for (let i = 0; i < photos.length; i++) {
            let singlePhoto = `<div class="bg-white col-8 p-3 col-md-5 col-lg-3 my-3 mx-2 photo-holder d-flex flex-column align-items-center">
                                    <img class="img-fluid mb-2" onClick="display()" src="${photos[i].url}" alt="">
                                    <img class="pin" src="./img/pin.svg" alt="">
                                    <p class="align-self-start date">${photos[i].date}</p>
                                    <h2 class="align-self-start"> ${photos[i].title}</h2>    
                                </div>`;
            photoContainer.innerHTML += singlePhoto;
        };
    });


let overlay = document.getElementById('overlay');
let overlayHolder = document.getElementById('overlay-holder');

// Funzione per mostrare e nascondere l'overlay
function display() {
    overlay.style.display = "flex";
    let placeHolder = overlayHolder.innerHTML;
    overlayHolder.innerHTML = `<img class="img-fluid" src="${event.target.src}" alt="">` + overlayHolder.innerHTML;

    let button = document.getElementById('closer');
    button.addEventListener("click", () => {
        overlay.style.display = "none";
        overlayHolder.innerHTML = placeHolder;
    });
};


