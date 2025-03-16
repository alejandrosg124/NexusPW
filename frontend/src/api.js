const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    return null;
  }
};
