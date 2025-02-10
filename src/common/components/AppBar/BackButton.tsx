import CaretLeftIcon from '@/common/assets/icon/icon-arrow-back.svg';
import { Button } from './CommonStyle';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onClick}>
      <img src={CaretLeftIcon} alt="뒤로 가기" />
    </Button>
  );
};

export default BackButton;
