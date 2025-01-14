import { useParams, useSearchParams } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import MusicInfo from './components/MusicInfo';

const TripDetailPage = () => {
  const { calendarId } = useParams<{ calendarId: string }>();
  const [searchParams] = useSearchParams();

  const movieId = searchParams.get('movieId');
  const musicId = searchParams.get('musicId');

  // TODO: 추후 에러 컴포넌트 추가시 수정
  if (!movieId && !musicId) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <>
      {calendarId && movieId && <MovieInfo calendarId={calendarId} movieId={movieId} />}
      {calendarId && musicId && <MusicInfo calendarId={calendarId} musicId={musicId} />}
    </>
  );
};

export default TripDetailPage;
