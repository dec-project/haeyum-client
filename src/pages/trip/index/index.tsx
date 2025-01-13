import styled from 'styled-components';
import FixedBottom from '@/common/components/fixedBottom';
import IconChatDot from '@/common/assets/icon/icon-chat-dot.svg';
import { useParams } from 'react-router-dom';
import MovieChart from './components/MovieChart';
import MusicChart from './components/MusicChart';
import NewsSection from './components/NewsSection';
import WeatherSection from './components/WeatherSection';
import AppBar from '@/common/components/appbar';

const Trip = () => {
  const { calendarId } = useParams<{ calendarId: string }>();

  if (!calendarId) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>해당 날짜 정보가 없습니다.</div>;
  }

  return (
    <>
      <AppBar
        leftContent={<AppBar.ArrowLeft />}
        text="여행 정보"
        rightContent={<AppBar.Heart disabled onClick={() => {}} />}
      />
      <Container>
        <NewsSection
        // calendarId={calendarId}
        />
        <WeatherSection calendarId={calendarId} />
        <MusicChart calendarId={calendarId} />
        <MovieChart calendarId={calendarId} />
        <FixedBottom>
          <ButtonWrapper>
            <Button>
              <ChatIcon src={IconChatDot} alt="chatIcon" />
              <span>90년대 채팅방</span>
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
  ${({ theme }) => theme.typography.body1.bold};

  & > span {
    margin-top: 1px;
  }
`;

const ChatIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Trip;
