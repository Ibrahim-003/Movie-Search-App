export const generateNotFound = (container) => {
    const fragment = document.createDocumentFragment();
    const notFound = document.createElement("div");
    notFound.innerHTML = `
        <h2 class="not-found__title">Movie not found</h2>
        <p class="not-found__message">We couldn't find the movie you are looking for.</p>
    `;
    fragment.appendChild(notFound);
    container.innerHTML = "";
    container.appendChild(fragment);
}
