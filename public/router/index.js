import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const init = () => {
    window.addEventListener('hashchange', () => {
        renderPage();
    })
}

const renderPage = () => {
    pageContainer.innerHTML='';
    const page = validateHash(window.location.hash);
    console.log("page",page,window.location.hash);
    pageContainer.appendChild(routes[page]);
}

const router = () => {
    window.addEventListener('load', () => {
        renderPage();
    })
    init();
}

export default router;
