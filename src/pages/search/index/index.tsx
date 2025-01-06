import { useLocation } from 'react-router-dom';
import Search from './components/Search';
import Result from './components/Result';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const startDate = queryParams.get('startDate') || '';
  const endDate = queryParams.get('endDate') || '';

  if (startDate && endDate) {
    return <Result startDate={startDate} endDate={endDate} />;
  }
  return <Search />;
};
export default SearchPage;
