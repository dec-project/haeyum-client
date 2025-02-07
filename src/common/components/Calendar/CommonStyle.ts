import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  button {
    border: none;
    cursor: pointer;
  }
`;

const Title = styled.span`
  ${({ theme }) => theme.typography.title3.regular}
`;

const Img = styled.img`
  height: 15px;
  margin-top: 5px;
  margin-left: 10px;
`;

export { Container, Header, Title, Img };
