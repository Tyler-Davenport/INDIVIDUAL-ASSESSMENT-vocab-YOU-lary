/* eslint-disable object-curly-newline */
import { deleteCard, getCards, getSingleCard, getCardDetails } from '../../api/cardData';
import { showCards } from '../../pages/cards';
import addCardForm from './addCardForm';
import viewCard from '../../pages/viewCard';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('add-card-btn')) {
      addCardForm({}, user);
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, user));
    }

    if (e.target.id.includes('view-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getCardDetails(firebaseKey).then(viewCard);
    }
  });
};

export default domEvents;
