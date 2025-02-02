import LoadingSpinner from '@/common/components/spinner';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProfile from '../hooks/useProfile';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Profile = () => {
  const { data: profileData, isLoading: isProfileLoading, isError: isProfileError, error: profileError } = useProfile();
  const navigate = useNavigate();

  if (isProfileLoading) return <LoadingSpinner />;

  if (isProfileError) {
    const errorMessage = profileError?.message || '프로필 데이터를 가져오는 중 문제가 발생했습니다.';
    console.error(errorMessage);
    return null;
  }

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <ProfileContainer>
      <ProfileImg src={`${BASE_URL}${profileData?.profileImg}`} alt="프로필 이미지" />
      <Nickname>{profileData?.nickname}</Nickname>
      <EditButton onClick={handleEditProfile}>프로필 수정</EditButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  text-align: center;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const Nickname = styled.h2`
  margin: 16px 0;
  ${({ theme }) => theme.typography.title2.bold};
`;

const EditButton = styled.button`
  padding: 0 16px;
  height: 40px;
  width: 100%;
  background-color: #f3e5cf;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => theme.typography.body2.bold};
`;

export default Profile;
