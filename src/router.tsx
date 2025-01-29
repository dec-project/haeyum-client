import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
import SearchPage from './pages/search/index';
import ChatsPage from './pages/chats/index';
import TripPage from './pages/trip/index';
import Navbar from './common/components/navbar';
import MyPage from './pages/my/index';
import TripDetailPage from './pages/trip/detail/index';
import ChatRoom from './pages/chats/room';
import LoginPage from './pages/auth/login';
import CallbackPage from './pages/auth/callback';
import ProfileEdit from './pages/my/edit';
import ScrollToTop from './common/components/scrollToTop';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: routeElement[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <ScrollToTop />,
    children: [
      {
        path: '/',
        element: <Navbar />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/search', element: <SearchPage /> },
          { path: '/chats', element: <ChatsPage /> },
          { path: '/profile', element: <MyPage /> },
        ],
      },
      { path: '/trip/:calendarId', element: <TripPage /> },
      { path: '/trip/:calendarId/detail', element: <TripDetailPage /> },
      { path: '/chats/:roomId/:roomName', element: <ChatRoom /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/oauth/kakao/authorize/fallback', element: <CallbackPage /> },
      { path: '/profile/edit', element: <ProfileEdit /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
