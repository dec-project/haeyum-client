import { create } from 'zustand';
import { getItem, setItem } from '../apis/localStorage';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
}

interface AuthStore extends AuthState {
  setTokens: (accessToken: string, refreshToken: string, userId: string) => void;
  clearTokens: () => void;
  isLogin: () => boolean;
  isLogout: () => boolean;
}

const getStorageToken = (): AuthState => ({
  accessToken: getItem('accessToken'),
  refreshToken: getItem('refreshToken'),
  userId: getItem('userId'),
});

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  userId: null,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...getStorageToken(),
  setTokens: (accessToken, refreshToken, userId) => {
    setItem('accessToken', accessToken);
    setItem('refreshToken', refreshToken);
    setItem('userId', userId);
    set(() => ({
      accessToken,
      refreshToken,
      userId,
    }));
  },
  clearTokens: () => {
    setItem('accessToken', null);
    setItem('refreshToken', null);
    setItem('userId', null);
    set(() => initialState);
  },
  isLogin: () => Boolean(getItem('accessToken')),
  isLogout: () => Boolean(!getItem('accessToken')),
}));
