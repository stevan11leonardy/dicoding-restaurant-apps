const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.setAttribute('data-hide', false);
  },

  _closeDrawer(event, drawer) {
    if (event) event.stopPropagation();
    drawer.setAttribute('style', 'transistion-duration:.3s');
    drawer.setAttribute('data-hide', true);
    drawer.setAttribute('style', 'transistion-duration:0');
  },
};

export default DrawerInitiator;
