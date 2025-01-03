import CaretLeftIcon from '@/common/assets/icon/icon-arrow-back.svg';
import { Button } from './CommonStyle';
import { useNavigate } from 'react-router-dom';

const ArrowLeft = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onClick}>
      <img src={CaretLeftIcon} alt="arrow-left" />
    </Button>
  );
};

export default ArrowLeft;
