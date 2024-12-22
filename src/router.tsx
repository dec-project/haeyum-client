import { createBrowserRouter } from 'react-router-dom';
type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [];

export const router = createBrowserRouter(routes);
