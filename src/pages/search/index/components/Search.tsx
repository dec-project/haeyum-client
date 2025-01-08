import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../../../common/components/calendar';
import { format } from 'date-fns';

const Search = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert('날짜를 선택해주세요.');
      return;
    }
    if (startDate && endDate) {
      navigate(`/search?startDate=${format(startDate, 'yyyy-MM-dd')}&endDate=${format(endDate, 'yyyy-MM-dd')}`, {
        replace: true,
      });
    }
  };

  return (
    <div>
      <Calendar startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
      <button onClick={handleSearch} disabled={!startDate || !endDate}>
        GO
      </button>
    </div>
  );
};

export default Search;
