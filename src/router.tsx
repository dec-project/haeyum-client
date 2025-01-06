import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/home/index';
import SearchPage from './pages/search/index';
import ChatsPage from './pages/chats/index';
import TripPage from './pages/trip/index';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  { path: '/', element: <HomePage /> },
  { path: '/chats', element: <ChatsPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/trip', element: <TripPage /> },
];

export const router = createBrowserRouter(routes);
