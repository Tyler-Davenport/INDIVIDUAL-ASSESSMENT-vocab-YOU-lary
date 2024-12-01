import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
        <div class="form-group">
          <label for="title">Card Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" placeholder="Vocab Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
        </div>
        <div class="form-group">
          <label for="category">Vocab Category</label>
          <textarea class="form-control" placeholder="Vocab Category" id="category" style="height: 100px">${obj.category || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit Vocab Card
        </button>
      </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
