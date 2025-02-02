import Container from '@/common/components/layout/Container';
import LoadingSpinner from '@/common/components/spinner';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProfile from '../index/hooks/useProfile';
import Camera from '@/common/assets/icon/icon-camera.svg?react';
import useProfileEdit from '../index/hooks/useProfileEdit';
import AppBar from '@/common/components/appbar';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProfileEdit = () => {
  const { data: profileData, isLoading: isProfileLoading, isError: isProfileError, error: profileError } = useProfile();
  const navigate = useNavigate();
  const { mutate, isPending: isProfileEditLoading, isSuccess: isProfileEditSuccess } = useProfileEdit();
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const file = files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
      }
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    mutate({ nickname: nickname, profileImg: file });
  };

  if (isProfileEditSuccess) navigate('/profile');
  if (isProfileLoading || isProfileEditLoading) return <LoadingSpinner />;
  if (isProfileError) {
    const errorMessage = profileError?.message || '프로필 데이터를 가져오는 중 문제가 발생했습니다.';
    console.error(errorMessage);
    return null;
  }

  return (
    <>
      <AppBar
        leftContent={<AppBar.ArrowLeft />}
        text="프로필 수정"
        rightContent={
          <AppBar.CompleteButton
            onClick={() => {
              handleEditProfile();
            }}
          />
        }
      />
      <Container>
        <Wrapper>
          <ProfilePictureWrapper>
            <ProfilePicture
              src={profileImage ? (profileImage as string) : `${BASE_URL}${profileData?.profileImg}`}
              alt="Profile"
            />
            <CameraIconWrapper htmlFor="file-input">
              <CameraIcon as={Camera} />
            </CameraIconWrapper>
            <FileInput id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
          </ProfilePictureWrapper>
          <NicknameWrapper>
            <Label htmlFor="nickname">닉네임</Label>
            <NicknameInput
              id="nickname"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              maxLength={10}
              minLength={2}
              onChange={(e) => setNickname(e.target.value)}
            />
          </NicknameWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  border-radius: 64px;
  background-color: lightgray;
  margin: 16px 0;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 64px;
  object-fit: cover;
`;

const CameraIconWrapper = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 2px solid ${({ theme }) => theme.themeColors.background};
  border-radius: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CameraIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const FileInput = styled.input`
  display: none;
`;

const NicknameWrapper = styled.div`
  margin: 12px 0;
  width: 100%;
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.body1.medium};
  display: block;
  padding-bottom: 8px;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.themeColors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.themeColors.background};
  color: ${({ theme }) => theme.themeColors.primary};
  ${({ theme }) => theme.typography.body1.medium};

  &::placeholder {
    color: ${({ theme }) => theme.themeColors.primary};
  }
`;

export default ProfileEdit;
