import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const makeGalleryItemsMarkup = Arr => {
  return Arr.map(
    image =>
      `
      <a class="gallery__item" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
        </a>
        `
  ).join('');
};

const galleryContainerRef = document.querySelector('.gallery');

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
