/* eslint-disable quotes */
import clearDom from "../utils/clearDom";
import renderToDOM from "../utils/renderToDom";

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.category}</p>
            <hr>
            <p class="card-text">${item.description}</p>
            <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
