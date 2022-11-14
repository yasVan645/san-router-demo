import sanRouter from './router/index.js'

import home from './views/home.js';
import about from './views/about.js';
import projects from './views/projects.js';

import navbar from './components/navbar.js';

const router = new sanRouter({
    mode: 'hash',
    root: '/'
})

let root = document.getElementById('root');
router
.add(/about/, async () => {
    root.innerHTML = await about.render();
    await about.after_render();
})
.add(/projects/, async () => {
    root.innerHTML = await projects.render();
    await projects.after_render();
})
.add('', async () => {
    root.innerHTML = await home.render();
    await home.after_render();
})

//call render navbar function
renderNavBar();

//render navbar function
async function renderNavBar(){
    let navbarContainer = document.getElementById('navbar');
    navbarContainer.innerHTML = await navbar.render();
    await navbar.after_render();
}