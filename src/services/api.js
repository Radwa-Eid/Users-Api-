const API_URL = "https://dummyjson.com/users";
export const getAllUsers = () => {
  return fetch(API_URL).then((res) => res.json());
};
export const getCarts = (id) => {
  return fetch(`${API_URL}/${id}/carts`).then((res) => res.json());
};
export const getUser = (id) => {
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
};
export const posts = (id) => {
  return fetch(`${API_URL}/${id}/posts`).then((res) => res.json());
};
export const todos = (id) => {
  return fetch(`${API_URL}/${id}/todos`).then((res) => res.json());
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
