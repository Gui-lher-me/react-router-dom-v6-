import { Link, Outlet } from 'react-router-dom';
import { subRoutes } from '../../routes/routesList';

export const Page3 = () => {
  return (
    <div>
      <div>
        {subRoutes.map((route) => (
          <Link key={route.url} to={route.url}>
            {route.url}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
