import Container from '@/common/components/layout/Container';
import Layout from './components/Layout';
import ProfileFavorite from './components/ProfileFavorite';
import Profile from './components/Profile';

const MyPage = () => {
  return (
    <Layout>
      <Container>
        <Profile />
        <ProfileFavorite />
      </Container>
    </Layout>
  );
};

export default MyPage;
