import routes from '../routes';
export default function getCurrentRoute(route = {}) {
  return routes.find(el => el.path === route.pathname) || {};
}