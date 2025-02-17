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
      {isActive ? <img src={HeartFull} alt="찜 선택" /> : <img src={HeartEmpty} alt="찜 해제" />}
    </Button>
  );
};

export default Heart;
