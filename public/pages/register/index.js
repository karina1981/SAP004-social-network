import template from './template.js'
const severUserData = () => {
  let name = document.querySelector("#textName");
  let surName = document.querySelector("#textSurname");
  let nickName = document.querySelector("#textNick");
  let dateOfB = document.querySelector("#date");

  const user = {
    name: name.value,
    surName: surName.value,
    nickName: nickName.value,
    dateOfB: dateOfB.value,
    user_uid: firebase.auth().currentUser.uid,
  };

  return firebase.firestore().collection('users').add(user)

}

// inicio do Envio de imagem
let uploadFoto = () => {
  let uid = firebase.auth().currentUser.uid;
  let inpFile = document.querySelector("input[name='foto']")
  let file = inpFile.files[0]
  let storageRef = firebase.storage().ref();
  // Create the file metadata

  var blob = new Blob([file], { type: "image/jpeg" });

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child(`upload/${uid}_${file.name}`).put(blob);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    function(snapshot) {

      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          break;
      }
    }, function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, function() {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  });
}
// fim do envio de imagem


const register = ()  => {
  const container = document.createElement('div');
  container.innerHTML = template;
  container.querySelector(".btCreateAccount").addEventListener("click", (ev)=>{
  
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#senha").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then (function(data){
        // alert("criou o usuário");
        console.log(data);
        let inserted = severUserData();

        inserted.then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          uploadFoto();
          window.location.hash = '#home';
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          alert(`erro ${error.code} ${error.message}`);
        });
        // window.location = 'login';
      })
      .catch(function(error) {
        // Handle Errors here.
        alert("erro "+ error.code);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
      });


  })ghj  return container;
}

export default register;