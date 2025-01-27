import styled from 'styled-components';
import useMusicDetail from '../hooks/useMusicDetail';
import LoadingSpinner from '@/common/components/spinner';
import Container from '@/common/components/layout/Container';
import AppBar from '@/common/components/appbar';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';

interface MusicInfoProps {
  calendarId: string;
  musicId: string;
}

const MusicInfo = ({ calendarId, musicId }: MusicInfoProps) => {
  const { data: musicInfoData, isLoading, isError } = useMusicDetail(calendarId, musicId);

  if (isLoading) {
    // TODO: 추후 로딩 컴포넌트 추가
    return <LoadingSpinner />;
  }

  if (isError || !musicInfoData) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>노래 상세 데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }

  const cleanedLyrics = DOMPurify.sanitize(musicInfoData.lyrics);

  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text="상세" rightContent={<AppBar.GoHome />} />
      <Container>
        <VideoSection>
          <IframeWrapper>
            <Iframe
              src={`${musicInfoData.youtubeAddr}`}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></Iframe>
          </IframeWrapper>
        </VideoSection>
        <ContentSection>
          <Title>{musicInfoData.title}</Title>
          <ReleaseDate>
            {musicInfoData.artists}
            <br />
            {format(new Date(musicInfoData.releaseDate), 'yyyy년 M월 d일')} | {musicInfoData.genre}
          </ReleaseDate>
        </ContentSection>
        <ContentSection>
          <Description dangerouslySetInnerHTML={{ __html: cleanedLyrics }} />
        </ContentSection>
      </Container>
    </>
  );
};

const VideoSection = styled.section`
  padding: 16px 0;
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentSection = styled.div`
  margin: 4px 0 12px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title1.bold};
  padding: 16px 0;
`;

const ReleaseDate = styled.span`
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
`;

export default MusicInfo;
