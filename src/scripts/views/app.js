import routes from '../routes';
import UrlParser from '../routes/url-parser';
import DrawerHelper from '../utils/drawer-helper';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ hamburgerButton, drawer, content }) {
    this._hamburgerButton = hamburgerButton;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._hamburgerButton,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    if (DrawerHelper._isDrawerOpen(this._drawer)) {
      DrawerInitiator._closeDrawer(null, this._drawer);
    }
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
