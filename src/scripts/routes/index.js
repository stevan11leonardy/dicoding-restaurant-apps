import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
