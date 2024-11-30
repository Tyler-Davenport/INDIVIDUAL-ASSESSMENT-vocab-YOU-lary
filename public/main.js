// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>WELCOME TO VOCAB-YOU-LARY!  🗄️</h1>
  `;

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
