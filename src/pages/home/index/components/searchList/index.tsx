import styled from 'styled-components';
import CaretRightIcon from '@/common/assets/icon/icon-arrow-right.svg';
import { useNavigate } from 'react-router-dom';

const SearchList = () => {
  const searchData = [
    {
      calenderId: 1,
      calenderName: '1999년 6월 13일',
      img: 'https://picsum.photos/seed/picsum/200/300',
      viewCount: 311,
      favoriteCount: 11,
    },
    {
      calenderId: 2,
      calenderName: '1998년 1월 4일',
      img: 'https://picsum.photos/seed/picsum/200/300',
      viewCount: 311,
      favoriteCount: 11,
    },
    {
      calenderId: 3,
      calenderName: '2001년 5월 30일',
      img: 'https://picsum.photos/seed/picsum/200/300',
      viewCount: 311,
      favoriteCount: 11,
    },
    {
      calenderId: 4,
      calenderName: '1999년 3월 31일',
      img: 'https://picsum.photos/seed/picsum/200/300',
      viewCount: 311,
      favoriteCount: 11,
    },
    {
      calenderId: 5,
      calenderName: '1999년 11월 20일',
      img: 'https://picsum.photos/seed/picsum/200/300',
      viewCount: 311,
      favoriteCount: 11,
    },
  ];
  const navigate = useNavigate();

  return (
    <List>
      {searchData.map((data) => (
        <Item key={data.calenderId}>
          <Content>
            <Img src={data.img} alt={data.calenderName} />
            <Info>
              <Title>{data.calenderName}</Title>
              <Detail>
                조회 {data.viewCount} • ❤ {data.favoriteCount}
              </Detail>
            </Info>
          </Content>
          <Icon src={CaretRightIcon} alt="" onClick={() => navigate(`/trip/${data.calenderId}`)} />
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
  width: 24px;
  height: 24px;
  cursor: pointer;
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
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.body1.bold};
`;

const Detail = styled.div`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

export default SearchList;
