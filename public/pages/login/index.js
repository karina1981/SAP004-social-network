import template from './template.js'

const login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
    window.location = '#feed';
  }).catch((error) => {
    const errorCode = error.code;
    console.log (error)
    const loginError = document.getElementById('loginError');
    if (errorCode === 'auth/wrong-password') {
      loginError.innerHTML = 'Senha inválida.';
    } else if (errorCode === 'auth/user -not-found') {
      loginError.innerHTML = 'Email não encontrado.';
    } else {
      loginError.innerHTML = 'Email não encontrado.';
    }
  });
}
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    window.location = '#feed';
  });
}

const loginFacebook= () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    window.location = '#feed';
  });
}

const render = ()  => {
  const container = document.createElement('div');

  container.innerHTML = template;

  return container;
}

const init =  () => {
  console.log('incializou')
  const loginButton = document.getElementById('login');
  loginButton.addEventListener('click', login);
  const googleButton = document.getElementById('loginGoogle');
  googleButton.addEventListener('click', loginGoogle);
  const facebookButton = document.getElementById('loginFacebook');
  facebookButton.addEventListener('click', loginFacebook);
}

export default {
  render,
  init,
}