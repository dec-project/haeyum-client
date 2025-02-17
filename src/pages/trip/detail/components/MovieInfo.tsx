import styled from 'styled-components';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { format } from 'date-fns';
import YouTubePlayer from './Video';
import Container from '@/common/components/Layout/Container';

interface MovieInfoProps {
  calendarId: string;
  movieId: string;
}

const MovieInfo = ({ calendarId, movieId }: MovieInfoProps) => {
  const { data: movieInfoData, isError } = useMovieDetail(calendarId, movieId);

  if (isError || !movieInfoData) {
    // TODO: 추후 에러 컴포넌트 추가
    console.error('해당 날짜의 영화 상세 데이터가 없습니다.');
    return null;
  }

  return (
    <Container>
      <VideoSection>
        <VideoWrapper>
          <YouTubePlayer videoId={`${movieInfoData.youtubeAddr}`} />
        </VideoWrapper>
      </VideoSection>
      <ContentSection>
        <Title>{movieInfoData.title}</Title>
        <ReleaseDate>{format(new Date(movieInfoData.releaseDate), 'yyyy년 M월 d일')}</ReleaseDate>
      </ContentSection>
      <ContentSection>
        <Description>{movieInfoData.content}</Description>
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

export default MovieInfo;
