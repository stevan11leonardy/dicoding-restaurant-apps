const LoadingInitiator = {
  init({ container }) {
    this._container = container;
    this._show();
    return this;
  },

  _show() {
    this._container.innerHTML += '<fetch-loading></fetch-loading>';
  },

  async _hide() {
    await this._container.removeChild(document.getElementsByTagName('fetch-loading')[0]);
  },
};

export default LoadingInitiator;
