import template from './template.js'

const render = ()  => {
  const container = document.createElement('div');

  container.innerHTML = template;

  return container;
}

const init =  () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('incializou')
    }
  });
}
export default {
  render,
  init,
}