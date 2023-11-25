import { API_KEY } from './search-constants.js';
import fetchData from './fetch-data.js';
import createCardsGallery from './create-cards-gallery.js';
import { createErrMsg } from './create-msg.js';

async function insertCardsToGallery(strForSearch, galleryRef) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    strForSearch
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetchData(url, API_KEY)
    .then(data => {
      if (!data.hits) {
        createErrMsg(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }
      createCardsGallery(data.hits, galleryRef);
    })
    .catch(error => console.log(error));
}

export default insertCardsToGallery;
