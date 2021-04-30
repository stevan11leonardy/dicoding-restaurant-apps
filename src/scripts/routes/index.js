import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
};

export default routes;
