import styled from 'styled-components';
import Carousel from './components/Carousel';
import Layout from './components/Layout';
import { useNavigate } from 'react-router-dom';
import SearchList from './components/SearchList';
import SearchInput from '@/common/components/searchInput';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <SearchInput placeholder="어느 시기로 가볼까요" onClick={() => navigate('/search')} />
        <Text>
          <span>실시간 인기 채팅방</span>
        </Text>
        <Carousel />
        <Text>
          <span>실시간 인기 검색 Top 5</span>
        </Text>
        <SearchList />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const Text = styled.div`
  padding: 20px 0 12px 0;
  span {
    ${({ theme }) => theme.typography.title2.bold};
  }
`;

export default Home;
