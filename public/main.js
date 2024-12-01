import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>WELCOME TO VOCAB-YOU-LARY!  🗄️</h1>
  `;

  ViewDirectorBasedOnUserAuthStatus();
};

init();
