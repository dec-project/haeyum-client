import { Button } from './CommonStyle';
import HeartEmpty from '@/common/assets/icon/icon-heart-empty.svg';
import HeartFull from '@/common/assets/icon/icon-heart-full.svg';

interface HeartProps {
  isActive: boolean;
  onClick: () => void;
}

const Heart = ({ isActive, onClick }: HeartProps) => {
  return (
    <Button onClick={onClick}>
      {isActive ? <img src={HeartFull} alt="heart-full" /> : <img src={HeartEmpty} alt="heart-empty" />}
    </Button>
  );
};

export default Heart;
