export const obtenerDatos = async (title,) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=5c3e55b&t=${title}`
    );
    if (!response.ok) throw new Error("Error en la peticion.");

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};
