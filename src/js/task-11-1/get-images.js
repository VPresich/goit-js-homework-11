import createCardsGallery from './create-cards-gallery.js';

async function getImages(apiKey, searchTerm, galleryRef) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    searchTerm
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'custom value',
    },
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data.hits);
      if (!data.hits) {
        createErrMsg(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }
      const cardsMarkup = createCardsGallery(data.hits, galleryRef);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
export default getImages;
