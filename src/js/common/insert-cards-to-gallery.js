import { API_KEY, API_URL } from '../common/constants.js';

import fetchData from './fetch-data.js';
import createCardsGallery from './create-cards-gallery.js';
import { createErrMsg } from './create-msg.js';

async function insertCardsToGallery({ searchForm, galleryRef, modalWndRef }) {
  const strForSearch = searchForm.search.value;
  const url =
    API_URL +
    `?key=${API_KEY}&q=${encodeURIComponent(
      strForSearch
    )}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetchData(url, API_KEY)
    .then(data => {
      if (!data.hits.length) {
        createErrMsg(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        searchForm.search.value = '';
      }
      createCardsGallery(data.hits, galleryRef);
      modalWndRef && modalWndRef.refresh();
    })
    .catch(error => {
      throw error;
    });
}

export default insertCardsToGallery;
