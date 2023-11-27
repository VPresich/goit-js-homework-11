function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(response.status);
        }
        resolve(response.json());
      })
      .catch(error => reject(error));
  });
}

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
