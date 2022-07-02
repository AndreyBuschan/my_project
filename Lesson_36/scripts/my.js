const request = fetch('https://jsonplaceholder.typicode.com/users');

const API_KEY = '16d1251b5cb9233ff392ac198f6394ea';
const API_URL = 'https://api.themoviedb.org/3';

request.then(function (response) {
  console.log('response', response)

  if (response.status >= 400 && response.status <= 499) {
    throw Error('Client error')
  } else if (response.status >= 500 && response.status <= 599) {
    throw Error('Server error')
  }

  return response.json();
}).then(function (data) {
  console.log('data', data)
  const list = document.createElement('ul');

  for (const el of data) {
    const listItem = document.createElement('li');
    listItem.innerText = el.name;

    list.append(listItem);
  }

  document.body.append(list);
  }).catch(function (error) {
    console.log('error', error);
    document.write(error);
  })


function makeSearch(value, page) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=${page}`)
    .then(function () {

  })
}
