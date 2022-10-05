import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'development' 
? import.meta.env.VITE_LOCAL_SERVER_URL
: import.meta.env.VITE_HOST_SERVER_URL;


export const getCategories = async () =>
  await axios.get(`${baseUrl}/categories`);

export const getCategory = async (slug) =>
  await axios.get(`${baseUrl}/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${baseUrl}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`${baseUrl}/category/${slug}`, category, {
    headers: {
      authtoken,
    },
  });

export const createCategory = async (category, authtoken) =>
  await axios.post(`${baseUrl}/category`, category, {
    headers: {
      authtoken,
    },
  });
