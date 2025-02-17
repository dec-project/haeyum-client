import CaretLeftIcon from '@/common/assets/icon/icon-arrow-back.svg';
import { Button } from './CommonStyle';
import { useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // TODO : 임시 수정
  const onClick = () => {
    if (location.key === 'default' || document.referrer === '' || history.length === 1) {
      navigate('/', { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <Button onClick={onClick}>
      <img src={CaretLeftIcon} alt="뒤로 가기" />
    </Button>
  );
};

export default BackButton;
