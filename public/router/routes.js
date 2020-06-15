import login from '../pages/login/index.js';
import register from '../pages/register/index.js';
import {home} from '../pages/home/main.js';

const routes = {
    login: login(), 
    register: register(),
    home: home()
}

export default routes;