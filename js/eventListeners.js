import { obtenerDatos } from "./api.js";
import { generateMovieCard } from "./movieCard.js";
import { generateNotFound } from "./notFound.js";

export const setupEventsListeners = () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("movie-name");
  const autocomplete = document.getElementById("autocomplete-list");

  const handleSearch = async () => {
    const cardContainer = document.getElementById("card-container");
    const searchValue = searchInput.value;

    const result = await obtenerDatos(searchValue);

    if (result.Response === "False") {
      generateNotFound(cardContainer);
      searchInput.value = "";
      autocomplete.innerHTML = "";
      return;
    } else {
      generateMovieCard(result, cardContainer);
      searchInput.value = "";
      autocomplete.innerHTML = "";
    }
  };

  const handleAutocomplete = async () => {
    const searchValue = searchInput.value;

    if (!searchValue) {
      autocomplete.innerHTML = "";
      return;
    }

    const movie = await obtenerDatos(searchValue);
    autocomplete.innerHTML = "";

    const item = document.createElement("div");
    item.innerHTML = `<strong>${movie.Title}</strong>`;
    item.addEventListener("click", () => {
      searchInput.value = movie.Title;
      autocomplete.innerHTML = "";
      handleSearch();
    });

    autocomplete.appendChild(item);
  };

  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  searchInput.addEventListener("input", handleAutocomplete);
};
