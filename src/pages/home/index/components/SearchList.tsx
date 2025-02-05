import styled from 'styled-components';
import CaretRightIcon from '@/common/assets/icon/icon-arrow-right.svg';
import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '@/common/components/spinner';
import { useSearchRanking } from '../hooks/useSearchRanking';
import { KeywordRanking } from '@/common/apis/ranking/type';

const SearchList = () => {
  const {
    data: searchData,
    //  isLoading,
    isError,
  } = useSearchRanking();
  const navigate = useNavigate();

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  if (!searchData || searchData.searches.length === 0) {
    return null;
  }

  if (isError) {
    return <div>검색 리스트 데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <List>
      {searchData.searches.map((data: KeywordRanking) => (
        <Item
          key={data.calendarId}
          onClick={() => navigate(`/trip/${data.calendarId}/${data.calendarDate}/${data.chatroomId}`)}
        >
          <Content>
            <Img src={`${import.meta.env.VITE_API_BASE_URL}${data.imgUrl}`} alt={data.calendarName} />
            <Info>
              <Title>{data.calendarName}</Title>
              <Detail>
                조회 {data.viewCount} • ♥ {data.favoriteCount}
              </Detail>
            </Info>
          </Content>
          <Icon src={CaretRightIcon} alt="search-input-button" />
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 4px;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-radius: 4px;
  cursor: pointer;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.body1.bold};
`;

const Detail = styled.div`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

export default SearchList;
