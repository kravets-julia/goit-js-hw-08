// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const cardsGalery = (createGaleryItems(galleryItems));
gallaryContainer.insertAdjacentHTML('beforeend', cardsGalery);
console.log(gallaryContainer)


function createGaleryItems(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            self
          />
        </a>
        </li>
      `;
    }).join('');
 }


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
 });

