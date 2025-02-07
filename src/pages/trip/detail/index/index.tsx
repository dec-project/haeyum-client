import { useParams, useSearchParams } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import MusicInfo from './components/MusicInfo';
import AppBar from '@/common/components/AppBar';
import { Suspense } from 'react';
import Loading from '@/common/components/Loading';

const TripDetailPage = () => {
  const { calendarId } = useParams<{ calendarId: string }>();
  const [searchParams] = useSearchParams();

  const movieId = searchParams.get('movieId');
  const musicId = searchParams.get('musicId');

  // TODO: 추후 에러 컴포넌트 추가시 수정
  if ((!calendarId && !movieId) || (!calendarId && !musicId)) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text="상세" rightContent={<AppBar.GoHome />} />
      <Suspense fallback={<Loading />}>
        {calendarId && movieId && <MovieInfo calendarId={calendarId} movieId={movieId} />}
        {calendarId && musicId && <MusicInfo calendarId={calendarId} musicId={musicId} />}
      </Suspense>
    </>
  );
};

export default TripDetailPage;
