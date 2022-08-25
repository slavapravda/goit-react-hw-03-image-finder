// import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28740342-1947fe48ccb576993622995e0';

function searchImg(name, page) {
  return fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Введіть другу назву, ${name} не існує`)
    );
  });
}

export default searchImg;
