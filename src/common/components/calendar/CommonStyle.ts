import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 225px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  button {
    background: none;
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
`;

export { Container, Header, Title, Img };
