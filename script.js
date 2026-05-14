// script.js

const uploadTrigger = document.getElementById("uploadTrigger");
const imageUpload = document.getElementById("imageUpload");
const galleryContainer = document.getElementById("galleryContainer");

uploadTrigger.addEventListener("click", () => {
    imageUpload.click();
});

imageUpload.addEventListener("change", (event) => {

    const files = event.target.files;

    for(let i = 0; i < files.length; i++){

        const file = files[i];

        const reader = new FileReader();

        reader.onload = function(e){

            const card = document.createElement("div");
            card.classList.add("gallery-card");

            card.innerHTML = `
                <img src="${e.target.result}" alt="Business Infograph">

                <div class="gallery-overlay">
                    <h3>Uploaded Business Infograph</h3>
                </div>
            `;

            galleryContainer.prepend(card);
        };

        reader.readAsDataURL(file);
    }

});