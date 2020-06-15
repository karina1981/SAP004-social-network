import template from './template.js'

const login = ()  => {
  const container = document.createElement('div');

  container.innerHTML = template;


  container.querySelector('.btEnter').addEventListener('click', function() {
    let email = container.querySelector('input[name=email]').value;
    let password = container.querySelector('input[name=senha]').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(data){
      alert("logou");
      console.log(data);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ...
    });
    console.log(password, email);
  });

  container.querySelector('.btGoogle').addEventListener('click', function() {
    let email = container.querySelector('input[name=email]');
    let password = container.querySelector('input[name=senha]');
    alert('clicou no Google');
    console.log(password, email);
  });

  container.querySelector('.btFacebook').addEventListener('click', function() {
    let email = container.querySelector('input[name=email]');
    let password = container.querySelector('input[name=senha]');
    alert('clicou no Facebook');
    console.log(password, email);
  });

  return container;
}

export default login;


// try{
// const email = "joaoo@gmail.com";
// const password = "123456";

// firebase.auth().createUserWithEmailAndPassword(email, password)
// .then(()=> console.log("deu certo"))
// .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;

//   console.log("deu ruim",errorCode,errorMessage)
//   // ...
// });

// }catch(e){
//   console.log(e);
// }
