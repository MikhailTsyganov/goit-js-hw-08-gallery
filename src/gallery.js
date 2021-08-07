import galleryItems from './app.js';

const ulEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox')
const modalImgEl = document.querySelector('.lightbox__image')
const closeBtnEl = document.querySelector('.lightbox__button')


const makeImageMarkUp = galleryItems.map(item => {

    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
}).join('');

ulEl.innerHTML = makeImageMarkUp;


ulEl.addEventListener('click', onClick)

function onClick(e) {
    if(e.target.nodeName !== 'IMG') {return}
    console.log(e.target.dataset.source);

    modalEl.classList.add('is-open');

    modalImgEl.src = e.target.dataset.source;
    modalImgEl.alt = e.target.alt;
}


closeBtnEl.addEventListener('click', onCloseModal);

function onCloseModal() {
    modalEl.classList.remove('is-open');
    modalImgEl.src = '';
    modalImgEl.alt = '';
}