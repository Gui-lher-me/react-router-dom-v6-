import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';

import { routes, subRoutes } from './routesList';

import { NoRouteMatch } from '../pages/NoRouteMatch';
import { NoSubRouteMatch } from '../pages/NoSubRouteMatch';

export const AppRoutes = () => {
  return (
    <Router>
      <div>
        <div>
          {routes.map((route) => (
            <Link key={route.url} to={route.url}>
              {route.url}
            </Link>
          ))}
        </div>
        <Routes>
          <Route index element={<Navigate replace to={routes[0].path} />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.path === 'page3' && (
                <>
                  <Route
                    index
                    element={<Navigate replace to={subRoutes[0].path} />}
                  />
                  {subRoutes.map((subRoute) => (
                    <Route
                      key={subRoute.path}
                      path={subRoute.path}
                      element={subRoute.element}
                    />
                  ))}
                  <Route path='*' element={<NoSubRouteMatch />} />
                </>
              )}
            </Route>
          ))}
          <Route path='*' element={<NoRouteMatch />} />
        </Routes>
      </div>
    </Router>
  );
};
