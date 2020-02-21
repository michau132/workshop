
import Dashboard from './components/Dashboard';
import UsersList from './components/UsersList';
import User from './components/User';
const routes = [
  { path: '/', component: Dashboard, title: 'Workshop React', },
  { path: '/users', component: UsersList, title: 'User list', },
  { path: '/user/:id', component: User, title: 'User', },
];
export default routes;