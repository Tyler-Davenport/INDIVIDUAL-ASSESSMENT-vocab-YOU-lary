import { signIn } from '../utils/auth';

const loginButton = () => {
  const domString = ' <h1>WELCOME TO VOCAB-YOU-LARY!  🗄️</h1> <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
