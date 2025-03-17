export const createMovieCard = (movieData) => {
  const {
    Title,
    Poster,
    Genre,
    Plot,
    Director,
    Writer,
    Actors,
    imdbRating,
    imdbVotes,
  } = movieData;
  const fragment = document.createDocumentFragment();
  const tempDiv = document.createElement("div");
  const genresArr = Genre.split(", ");

  tempDiv.innerHTML = `
        <div class="movie-card__poster">
            <img class="movie-card__poster-image" src="${Poster}" alt="${Title}">
        </div>
        <div class="movie-card__details">
            <h2 class="movie-card__title">${Title}</h2>
            <div class="movie-card__genres">
                ${genresArr
                  .map(
                    (genre) => `<span class="movie-card__genre">${genre}</span>`
                  )
                  .join("")}
            </div>
            <p class="movie-card__description">${Plot}</p>
            <div class="movie-card__info">
                <p class="movie-card__info-item">Director: <span class="movie-card__info-value">${Director}</span>
                </p>
                <p class="movie-card__info-item">Writers: <span class="movie-card__info-value">${Writer}</span></p>
                <p class="movie-card__info-item">Stars: <span class="movie-card__info-value">${Actors}</span></p>
                <p class="movie-card__info-item">IMDb Rating: <span
                        class="movie-card__info-value">${imdbRating}/10</span><span class="movie-card__info-value votes">(${imdbVotes}
                        votes)</span></p>
            </div>
        </div>
    `;

  while (tempDiv.firstElementChild) {
    fragment.appendChild(tempDiv.firstElementChild);
  }

  return fragment;
};

export const generateMovieCard = (movieData, container) => {
  const movieCardContainer = document.createElement("article");
  movieCardContainer.classList.add("movie-card");
  movieCardContainer.id = "movie-card";
  movieCardContainer.appendChild(createMovieCard(movieData));
  container.innerHTML = "";
  container.appendChild(movieCardContainer);
};
