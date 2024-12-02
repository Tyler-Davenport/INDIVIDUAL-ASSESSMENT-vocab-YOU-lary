/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
import { signOut } from '../../utils/auth';
import { searchCards, getCards, cardsByTech, cardsByLanguage } from '../../api/cardData';
import { showCards } from '../../pages/cards';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#tech').addEventListener('click', () => {
    cardsByTech(user.uid).then(showCards);
  });

  document.querySelector('#language').addEventListener('click', () => {
    cardsByLanguage(user.uid).then(showCards);
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keycode === 13) {
      searchCards(user);
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
