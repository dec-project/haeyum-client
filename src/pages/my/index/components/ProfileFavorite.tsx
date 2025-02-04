import styled from 'styled-components';
import useProfileFavorite from '../hooks/useProfileFavorite';
import LoadingSpinner from '@/common/components/spinner';
import { useNavigate } from 'react-router-dom';
import HeartFull from '@/common/assets/icon/icon-heart-full.svg?react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProfileFavorite = () => {
  const {
    data: favoriteData,
    isLoading: isFavoriteLoading,
    isError: isFavoriteError,
    error: favoriteError,
  } = useProfileFavorite();

  const navigate = useNavigate();
  if (isFavoriteLoading) return <LoadingSpinner />;

  // TODO: 에러 처리 추후 intercepter 수정 시 지워야 함
  if (isFavoriteError || !favoriteData) {
    const errorMessage = favoriteError?.message || '프로필 찜 데이터를 가져오는 중 문제가 발생했습니다.';
    console.error(errorMessage);
    return null;
  }

  const handleFavoriteClick = (id: number, date: string, chatroomId: number) => {
    navigate(`/trip/${id}/${date}/${chatroomId}`);
  };

  return (
    <FavoriteContainer>
      <span>내가 찜한 여행</span>
      {favoriteData?.itemList.length === 0 ? (
        <NoData>기억나는 추억을 추가해보세요 📒</NoData>
      ) : (
        favoriteData?.itemList.map((item, index) => (
          <FavoriteItem
            key={index}
            onClick={() => handleFavoriteClick(item.calendarId, item.calendarDate, item.chatroomId)}
          >
            <FavoriteImg src={`${BASE_URL}${item.img}`} alt="여행 이미지" />
            <FavoriteDate>{item.calendarName}</FavoriteDate>
            <FavoriteIcon as={HeartFull} />
          </FavoriteItem>
        ))
      )}
    </FavoriteContainer>
  );
};

const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    padding: 20px 0 12px 0;
    ${({ theme }) => theme.typography.title2.bold};
  }
`;

const NoData = styled.div`
  padding: 20px 0;
  text-align: center;
  ${({ theme }) => theme.typography.body1.medium};
`;

const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  cursor: pointer;
`;

const FavoriteImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 16px;
`;

const FavoriteDate = styled.span`
  flex-grow: 1;
  cursor: pointer;
  ${({ theme }) => theme.typography.body1.medium};
`;

const FavoriteIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export default ProfileFavorite;
