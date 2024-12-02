import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewCard = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <a href="#" class="btn btn-info" id="edit-card-btn--${obj.firebaseKey}">✍️</a>
      <a href="#" class="btn btn-danger" id="delete-card-btn--${obj.firebaseKey}">🔥</a>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title}</h5>
     ${obj.category}</a>
     <p>${obj.description || ''}</p>
     <p>${obj.timeSubmitted}</p>
     <hr>   
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewCard;
