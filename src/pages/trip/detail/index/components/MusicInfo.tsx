import styled from 'styled-components';
import { useMusicDetail } from '../hooks/useMusicDetail';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import YouTubePlayer from './Video';
import Container from '@/common/components/layout/Container';

interface MusicInfoProps {
  calendarId: string;
  musicId: string;
}

const MusicInfo = ({ calendarId, musicId }: MusicInfoProps) => {
  const { data: musicInfoData, isError } = useMusicDetail(calendarId, musicId);

  if (isError || !musicInfoData) {
    return null;
  }

  const cleanedLyrics = DOMPurify.sanitize(musicInfoData.lyrics);

  return (
    <Container>
      <VideoSection>
        <VideoWrapper>
          <YouTubePlayer videoId={`${musicInfoData.youtubeAddr}`} />
        </VideoWrapper>
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
  );
};

const VideoSection = styled.section`
  padding: 16px 0;
  position: relative;
  padding-bottom: 56.25%;
`;

const VideoWrapper = styled.div`
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
