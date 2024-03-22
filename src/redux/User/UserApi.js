import { API_URL } from "../../constants.js";

export const login = async (user) => {
  const url = `${API_URL}user/auth/login`;

  const requestOptions = {
    method: "POST",
    body: user,
    // "headers" : {
    //     "Authorization" : `Bearer ${token}`
    // }
  };
  console.log(requestOptions);
  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const register = async (user) => {
  const url = `${API_URL}/user/auth/register`;

  const requestOptions = {
    method: "POST",
    body: user,
    // "headers" : {
    //     "Authorization" : `Bearer ${token}`
    // }
  };

  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const getUser = async (id, token) => {
  const url = `${API_URL}/user/crud?id=${id}`;

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const getUsers = async (token) => {
  const url = `${API_URL}/user/crud`;

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const createUser = async (user, token) => {
  const url = `${API_URL}/user/crud`;

  const requestOptions = {
    method: "POST",
    body: user,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const updateUser = async (user, token) => {
  const url = `${API_URL}/user/crud`;

  const requestOptions = {
    method: "PUT",
    body: user,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};

export const deleteUser = async (user) => {
  const url = `${API_URL}/user/crud`;

  const requestOptions = {
    method: "PUT",
    body: user,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, requestOptions);
  const data = res.json();
  return data;
};
