const DrawerHelper = {
  _isDrawerOpen(drawer) {
    return drawer.getAttribute('data-hide') === 'false';
  },
};

export default DrawerHelper;
