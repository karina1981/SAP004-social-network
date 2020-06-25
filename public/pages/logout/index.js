const render = ()  => {
  const container = document.createElement('div');

  container.innerHTML = '';

  return container;
}

const init =  () => {
    firebase.auth().signOut().then(function() {
      window.location.href = '/';
    }).catch(function(error) {
      window.location.href = '/';
    });
}

export default {
  render,
  init,
}