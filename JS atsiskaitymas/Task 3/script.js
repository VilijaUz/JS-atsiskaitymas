/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.style.display = 'none';
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(users => {
      const userCards = users.map(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}">
          <h3>${user.login}</h3>`;
        return card;
      });
      output.innerHTML = '';
      userCards.forEach(card => output.appendChild(card));
    })
    .catch(error => console.error(error));
});