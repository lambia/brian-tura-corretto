let photoContainer = document.getElementById('photo-container');

// Effettuo la chiamata axios
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(resp => {
        const photos = resp.data;
        console.log(photos);
        for (let i = 0; i < photos.length; i++) {
            let singlePhoto = `<div class="bg-white col-8 p-3 col-md-5 col-lg-3 my-3 mx-2 photo-holder d-flex flex-column align-items-center">
                                    <img class="img-fluid mb-2" src="${photos[i].url}" alt="">
                                    <img class="pin" src="./img/pin.svg" alt="">
                                    <p class="align-self-start date">${photos[i].date}</p>
                                    <h2 class="align-self-start"> ${photos[i].title}</h2>    
                                </div>`;
            photoContainer.innerHTML += singlePhoto;
        };

        //Se riscrivo l'innerHTML dell'intero overlay-holder, viene distrutto e ricreato.
        //Anche il bottone che contiene viene distrutto e ricreato, e perde l'evento associato
        //Ho inserito in index.html già un'immagine vuota, così riscrivo solo quella, senza toccare il bottone
        let overlayImg = document.querySelector('#overlay-holder img');

        let photoCards = document.querySelectorAll(".photo-holder");
        for (const photoCard of photoCards) {
            photoCard.addEventListener("click", (event) => {
                overlay.style.display = "flex";
                overlayImg.src = event.target.src;
            });
        }
    });


let button = document.getElementById('closer');
let overlay = document.getElementById('overlay');

//Ora posso gestire il button
button.addEventListener("click", () => {
    overlay.style.display = "none";
});