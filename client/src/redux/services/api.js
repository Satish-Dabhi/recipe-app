export const API_HOSTNAME = 'http://localhost:3005';
export const PROD_SERVER_URL = 'https://recipe-app-server-or12z1jl9-satish-dabhi.vercel.app';
export const GET_RECIPES_END_POINT = '/recipe/${query}';
export const GET_RECIPE_DETAIL_BY_ID_END_POINT = '/recipe/detail/${id}';
export const GET_RECIPE_INSTRUCTIONS_BY_ID_END_POINT = '/recipe/instructions/${id}';
export const ADD_USER_END_POINT = '/user';
export const GET_USER_BY_ID_END_POINT = '/user/${token}';


export const POST_API = async (api, data) => {
  // const newApi = API_HOSTNAME + api;
  const newApi = PROD_SERVER_URL + api;
  const response = await fetch(newApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const GET_API = async (api) => {
  // const newApi = API_HOSTNAME + api;
  const newApi = PROD_SERVER_URL + api;
  const response = await fetch(newApi);
  return response.json();
};
