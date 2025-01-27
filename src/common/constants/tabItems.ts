import React from 'react';
import Home from '@/common/assets/icon/icon-home.svg?react';
import Search from '@/common/assets/icon/icon-search.svg?react';
import Chat from '@/common/assets/icon/icon-chat.svg?react';
import Profile from '@/common/assets/icon/icon-people.svg?react';
import { TabType } from '../types/TabType';

type TabItem = {
  name: TabType;
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TAB_ITEM: TabItem[] = [
  { name: '홈', path: '/', icon: Home },
  { name: '검색', path: '/search', icon: Search },
  { name: '채팅', path: '/chats', icon: Chat },
  { name: '내 여행', path: '/profile', icon: Profile },
];

export { TAB_ITEM };
