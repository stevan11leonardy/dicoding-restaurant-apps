import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

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
});
