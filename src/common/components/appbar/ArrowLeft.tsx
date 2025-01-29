import CaretLeftIcon from '@/common/assets/icon/icon-arrow-back.svg';
import { Button } from './CommonStyle';
import { useNavigate } from 'react-router-dom';

const ArrowLeft = ({ locate = -1 }: { locate?: string | number }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(locate as string);
  };

  return (
    <Button onClick={onClick}>
      <img src={CaretLeftIcon} alt="arrow-left" />
    </Button>
  );
};

export default ArrowLeft;
