import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const renderPage = () => {
  pageContainer.innerHTML = '';
  const page = validateHash(window.location.hash);
  const route = routes[page];
  if (page != 'login') {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        pageContainer.appendChild(route.render());
        route.init();
      } else {
        document.location.hash = '#login';
      }
    });
  } else {
    pageContainer.appendChild(route.render());
    route.init();
  }
}

const router = () => {
  window.addEventListener('load', () => {
    renderPage();
  });
  window.addEventListener('hashchange', () => {
    renderPage();
  })
}

export default router;
