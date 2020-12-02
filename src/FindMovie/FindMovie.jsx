import React, { useState } from 'react';
import { getMovie } from '../api/api';

export const FindMovie = () => {
  const [title, setTitle] = useState();

  async function handleFindMovie() {
    const foundMovie = await getMovie(title);

    // eslint-disable-next-line
    console.log(foundMovie);

    return foundMovie;
  }

  return (
    <div>
      <input type="text" onChange={event => setTitle(event.target.value)} />
      <button type="button" onClick={handleFindMovie}>
        Find Movie
      </button>
      <button type="button">
        Add movie to the list
      </button>
    </div>
  );
};
