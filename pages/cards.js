/* eslint-disable quotes */
import clearDom from "../utils/clearDom";
import renderToDOM from "../utils/renderToDom";

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `

<div class="card">
  <h5 class="card-header">${item.title}</h5>
  <div class="card-body">
    <h5 class="card-title">${item.category}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text">${item.timeSubmitted}</p>
    <a href="#" class="btn btn-warning" id="view-card-btn--${item.firebaseKey}">📖</a>
    <a href="#" class="btn btn-info" id="edit-card-btn--${item.firebaseKey}">✍️</a>
    <a href="#" class="btn btn-danger" id="delete-card-btn--${item.firebaseKey}">🔥</a>
  </div>
</div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
