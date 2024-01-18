const fetchData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(new Error(`HTTP error, status: ${response.status}`));
        }
        return response.json();
      })
      .then(json => resolve(json))
      .catch(error => reject(error))
  );

export default fetchData;

// without promise
// async function fetchData(url) {
//
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
