import { getItem } from '@/common/apis/localStorage';
import { useState, useEffect } from 'react';

const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState(() => getItem(key));

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(getItem(key));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return storedValue;
};

export { useLocalStorage };
