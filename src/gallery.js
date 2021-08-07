import galleryItems from './app.js';

const ulEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox')
const modalImgEl = document.querySelector('.lightbox__image')
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]')
const overlayEl = document.querySelector('.lightbox__overlay')


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

    modalEl.classList.add('is-open');
    window.addEventListener('keydown', onEscClose);

    modalImgEl.src = e.target.dataset.source;
    modalImgEl.alt = e.target.alt;
}

function closeModal() {
    modalEl.classList.remove('is-open');
    modalImgEl.src = '';
    modalImgEl.alt = '';
    window.removeEventListener('keydown', onEscClose);
}


closeBtnEl.addEventListener('click', onBtnCloseModal);

function onBtnCloseModal() {
    closeModal()
}


overlayEl.addEventListener('click', onCloseModalOnOverlay);


function onCloseModalOnOverlay() {
    closeModal()
}


function onEscClose(e) {
    if(e.code === 'Escape') {closeModal()}
    
}