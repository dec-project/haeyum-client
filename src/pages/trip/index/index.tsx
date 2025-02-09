import styled from 'styled-components';
import FixedBottom from '@/common/components/fixedBottom';
import IconChatDot from '@/common/assets/icon/icon-chat-dot.svg';
import { useNavigate, useParams } from 'react-router-dom';
import MovieChart from './components/MovieChart';
import MusicChart from './components/MusicChart';
import NewsSection from './components/NewsSection';
import WeatherSection from './components/WeatherSection';
import AppBar from '@/common/components/appbar';
import { useFavorite, usePutFavorite } from './hooks/useFavorite';
import useAuthStore from '@/common/stores/useAuthStore';
import { useState } from 'react';
import { useViewCount } from './hooks/useViewCount';
import { format } from 'date-fns';
import { getDecadeNumber } from './utils';

const TripPage = () => {
  const { calendarId, calendarDate, chatroomId } = useParams();
  const [, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  if (!calendarId || !calendarDate || !chatroomId) {
    setErrorMessage('잘못된 접근입니다.');
    return;
  }

  useViewCount(calendarId);

  const { data: favoriteData, isLoading } = useFavorite(calendarId);
  const { mutate: toggleFavorite } = usePutFavorite();
  const isLogin = useAuthStore.getState().isLogin();

  const isActive = favoriteData && favoriteData.isFavorite ? favoriteData.isFavorite : false;

  if (!calendarId) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>해당 날짜 정보가 없습니다.</div>;
  }

  if (isLoading) return <div>로딩 중...</div>;

  const handleFavoriteClick = () => {
    if (!isLogin) {
      // TODO: 에러 컴포넌트 추가 후 수정
      if (confirm('로그인 후 찜 기능을 사용할 수 있습니다.')) {
        navigate('/login');
      }
    } else {
      toggleFavorite(calendarId);
    }
  };

  const decadeName = `${getDecadeNumber(calendarDate)}년대`;

  const handleChatNavigate = () => {
    if (!isLogin) {
      // TODO: 에러 컴포넌트 추가 후 수정
      if (confirm('로그인 후 채팅방 기능을 사용할 수 있습니다.')) {
        navigate('/login');
      }
    } else {
      navigate(`/chats/${chatroomId}/${decadeName}`);
    }
  };

  return (
    <>
      <AppBar
        leftContent={<AppBar.ArrowLeft />}
        text={`${format(new Date(calendarDate), 'yyyy년 M월 d일')}`}
        rightContent={<AppBar.Heart onClick={handleFavoriteClick} isActive={isActive} />}
      />
      <Container>
        <NewsSection calendarId={calendarId} />
        <WeatherSection calendarId={calendarId} />
        <MusicChart calendarId={calendarId} />
        <MovieChart calendarId={calendarId} />
        <FixedBottom>
          <ButtonWrapper>
            <Button onClick={handleChatNavigate}>
              <ChatIcon src={IconChatDot} alt="chatIcon" />
              <span>{decadeName} 채팅방</span>
            </Button>
          </ButtonWrapper>
        </FixedBottom>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 72px;
  padding-bottom: 92px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.themeColors.secondary};
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => theme.typography.body1.bold};

  & > span {
    margin-top: 1px;
  }
`;

const ChatIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default TripPage;
