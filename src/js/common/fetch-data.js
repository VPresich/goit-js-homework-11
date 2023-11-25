async function fetchData(url, apiKey) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  };
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default fetchData;
