const imageMarkup = ({ preview, description, original }) => {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${original}">
              <img class="gallery-img"
                  src="${preview}"
                  alt="${description}"
                  data-source="${original}"
               />
            </a>
          </li>`;
};

const createImagesMarkup = images => {
  return images.map(imageMarkup).join('');
};

function createGallery(images, galleryRef) {
  const imagesMarkup = createImagesMarkup(images);
  galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);
}

export { createImagesMarkup };
export default createGallery;
