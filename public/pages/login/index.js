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
  firebase.auth().signInWithPopup(provider).then((data) => {
    new Promise((resolve, reject) => {
      firebase.firestore().collection('users')
      .where('user_uid', '==', data.user.uid).get()
      .then(docs => {
        if (docs.size == 0 && data.user.uid) {
          const user = {
            name: data.user.displayName,
            surname:"",
            status: "",
            date: "",
            photo: data.user.photoURL,
            user_uid: data.user.uid,
          };
          firebase.firestore().collection('users').add(user)
            .catch((error) => {
              reject(error);
            }).finally((data) => {
              resolve(data);
            });
        } else {
          resolve(docs.size);
        }
      });
    }).finally((ret) => {
      console.log("RET LOGIN GOOGLE...", ret);
      window.location.hash = '#feed';
    });
  });
}

const loginFacebook= () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((data) => {
    new Promise((resolve, reject) => {
      firebase.firestore().collection('users')
      .where('user_uid', '==', data.user.uid).get()
      .then(docs => {
        if (docs.size == 0 && data.user.uid) {
          const user = {
            name: data.user.displayName,
            surname:"",
            status: "",
            date: "",
            photo: data.user.photoURL,
            user_uid: data.user.uid,
          };
          firebase.firestore().collection('users').add(user)
            .catch((error) => {
              reject(error);
            }).finally((data) => {
              resolve(data);
            });
        } else {
          resolve(docs.size);
        }
      });
    }).finally(() => {
      console.log("RET LOGIN FACEBOOK...", ret);
      window.location.hash = '#feed';
    });
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