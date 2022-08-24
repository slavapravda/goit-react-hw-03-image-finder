function searchApi(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&${page}&key=28740342-1947fe48ccb576993622995e0&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(alert(`Введіть другу назву, ${name} не існує`))
    );
  });
}

export default searchApi;
