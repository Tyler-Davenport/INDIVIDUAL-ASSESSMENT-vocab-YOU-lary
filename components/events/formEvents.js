/* eslint-disable quotes */
import { createCard, getCards, updateCard } from "../../api/cardData";
import { showCards } from "../../pages/cards";

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    const timeSubmitted = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        description: document.querySelector('#description').value,
        timeSubmitted,
        uid: user.uid
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        description: document.querySelector('#description').value,
        firebaseKey,
        timeSubmitted,
        uid: user.uid
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
