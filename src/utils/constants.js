const ACCESS_TOKEN = "";
export const FIREBASE_API_KEY = "";
export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_LOGO = 'https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg';
export const MOVIE_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  export const API_IMG_URL = "https://image.tmdb.org/t/p/w500";
  export const SUPPORTED_LANG = [
    {
      identifier : "en",
      name:"English"
    },
    {
      identifier : "hindi",
      name:"Hindi"
    },
    {
      identifier : "spanish",
      name:"Spanish"
    },
  ]