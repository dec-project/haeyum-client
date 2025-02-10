import HomeIcon from '@/common/assets/icon/icon-home.svg';
import { Button } from './CommonStyle';
import { useNavigate } from 'react-router-dom';

const GoHome = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <Button onClick={onClick}>
      <img src={HomeIcon} alt="홈으로 이동" />
    </Button>
  );
};

export default GoHome;
