import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './views/templates/error-fetch';
import './views/templates/fetch-loading';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  hamburgerButton: document.querySelector('.hamburger-btn'),
  drawer: document.getElementsByTagName('nav')[0],
  content: document.getElementsByTagName('main')[0],
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
