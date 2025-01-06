import { Button } from './CommonStyle';
import HeartEmpty from '@/common/assets/icon/icon-heart-empty.svg';
import HeartFull from '@/common/assets/icon/icon-heart-full.svg';

const Heart = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      {disabled ? <img src={HeartEmpty} alt="heart-empty" /> : <img src={HeartFull} alt="heart-full" />}
    </Button>
  );
};

export default Heart;
