import template from './template.js'

const saverUserData = () => {
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const status = document.getElementById('status');
  const date = document.getElementById('date');
  const user = {
    name: name.value,
    surname: surname.value,
    status: status.value,
    date: date.value,
    photo: "",
    user_uid: firebase.auth().currentUser.uid,
  };
  return firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(user);
};


// inicio do Envio de imagem
let uploadFoto = () => {
  let uid = firebase.auth().currentUser.uid;
  let inpFile = document.querySelector("input[name='photo']")
  let file = inpFile.files[0]
  if (!file || !file.name) {
    return;
  }
  let storageRef = firebase.storage().ref();

  var blob = new Blob([file], { type: "image/jpeg" });

  var uploadTask = storageRef.child(`upload/${uid}_${file.name}`).put(blob);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    function (snapshot) {

      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          break;
      }
    },
    function (error) {

      switch (error.code) {
        case 'storage/unauthorized':
          alert('Nao autorizado ! ')
          break;

        case 'storage/canceled':
          alert('Usuario cancelou upload ! ')
          break;

        case 'storage/unknown':
          alert('Storage nao configurado ! ')
          break;
      }
    },
    function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        // console.log('File available at', downloadURL);
        let user_uid = firebase.auth().currentUser.uid;

        firebase.firestore().collection('users').doc(user_uid).update({
          photo : downloadURL
        });
        // firebase.firestore().collection('users').where('user_uid', '==', user_uid).get().then( ....
        // firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(x => console.log(x.data()))

      });
    });
}
// fim do envio de imagem

const create = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;

  if (name === '' || surname === '' || email === '' || password === '') {
    loginError.innerHTML = 'Preencha os campos em branco';
  } else if (password !== passwordConfirm) {
    loginError.innerHTML = 'Senha inválida';
  } else if (password.length < 6) {
    loginError.innerHTML = 'A senha deve possuir ao menos 6 caracteres';
  } else if (password === passwordConfirm) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log("USER", data);
        let inserted = saverUserData();
        inserted.then((data) => {
          uploadFoto();
          window.location.hash = '#feed';
        }).catch((error) => {
          alert(`Erro : ${error.code} `);
        });

      }).catch((error) => {
        const errorCode = error.code;
        console.log(error);
      });
  }
};

const render = () => {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container;
}

const init = () => {
  const registerButton = document.getElementById('register');
  console.log(registerButton)
  registerButton.addEventListener('click', create);
};

export default {
  render,
  init,
}