import { create } from 'zustand';
import { getItem, setItem } from '../apis/localStorage';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthStore extends AuthState {
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

const getStorageToken = (): AuthState => ({
  accessToken: getItem('accessToken'),
  refreshToken: getItem('refreshToken'),
});

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...getStorageToken(),
  setTokens: (accessToken, refreshToken) => {
    setItem('accessToken', accessToken);
    setItem('refreshToken', refreshToken);
    set(() => ({
      accessToken,
      refreshToken,
    }));
  },
  clearTokens: () => {
    setItem('accessToken', null);
    setItem('refreshToken', null);
    set(() => initialState);
  },
}));

export default useAuthStore;
