export const obtenerDatos = async (title, pages = 1) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=5c3e55b&t=${title}&page=${pages}`
    );
    if (!response.ok) throw new Error("Error en la peticion.");

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};
