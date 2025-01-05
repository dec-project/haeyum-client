import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 100%;
  max-width: var(--max-width);
  min-width: var(--min-width);
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
