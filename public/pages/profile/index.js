import template from './template.js'


const render = (user)  => {
  const container = document.createElement('div');

  container.innerHTML = template(user);

  return container;
}

const init =  () => {
  let btEdit = document.querySelector('.btEdit')
  btEdit.addEventListener('click', (ev) => {
    // faz o click na imagem e habilita o input para mudar o nome
    let inputEdit = ev.target.parentElement.querySelector('input[name=inputEdit]')
    inputEdit.style.display = "block";
    inputEdit.focus();
  });

  let changeName = (ev) => {
    let value = ev.target.value
    if ( value != '') {
      var query = firebase.firestore().collection('users').where('user_uid', '==', firebase.auth().currentUser.uid)
      query.get().then(function(users) {
        users.forEach(function(user) {
          user.ref.update({ name: value }).then(() => {
            ev.target.parentElement.querySelector('.userName').innerHTML = value
            ev.target.style.display = "none";
            ev.target.value = '';
          });
        });
      });
    } else {
      ev.target.style.display = "none";
    }
  }

  // dispara a funcao para mudar o nome
  document.querySelector('input[name=inputEdit]').addEventListener('change', changeName);
  document.querySelector('input[name=inputEdit]').addEventListener('blur', changeName);



  document.querySelector('.imgPhoto').addEventListener('click', (ev) => {
    let inputFile = ev.target.parentElement.querySelector('input[type=file]')
    inputFile.style.display = "block"
  });

// inicio do Envio de imagem
let uploadFoto = (data) => {
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
        // let user_uid = firebase.auth().currentUser.uid;

        firebase.firestore().collection('users').doc(data.id).update({
          photo : downloadURL
        }).then(() => {
          inpFile.style.display = "none"
          document.querySelector('.imgPhoto').src = downloadURL
        });
        // firebase.firestore().collection('users').where('user_uid', '==', user_uid).get().then( ....
        // firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(x => console.log(x.data()))

      });
    });
}


  let changePhoto = (ev) => {

    var query = firebase.firestore().collection('users').where('user_uid', '==', firebase.auth().currentUser.uid)
    query.get().then(function(users) {
      users.forEach(function(user) {

        uploadFoto(user)

      });
    });


  }

  document.querySelector('input[type=file]').addEventListener('change', changePhoto)
}
export default {
  render,
  init,
}