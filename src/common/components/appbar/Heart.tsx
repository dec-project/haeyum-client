import { Button } from './CommonStyle';
import HeartEmpty from '@/common/assets/icon/icon-heart-empty.svg';
import HeartFull from '@/common/assets/icon/icon-heart-full.svg';

const Heart = ({ disabled }: { disabled: boolean }) => {
  const onClick = () => {};

  return (
    <Button onClick={onClick}>
      {disabled ? <img src={HeartEmpty} alt="heart-empty" /> : <img src={HeartFull} alt="heart-empty" />}
    </Button>
  );
};

export default Heart;
