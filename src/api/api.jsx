const URL = 'http://www.omdbapi.com/?apikey=287c70f0&t=';

export const getMovie = async(title) => {
  const response = await fetch(URL + title);
  const movie = await response.json();

  return movie;
};
