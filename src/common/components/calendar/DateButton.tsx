import styled from 'styled-components';

interface DateButtonProps {
  prevMonths: () => void;
  nextMonths: () => void;
}

export default function DateButton({ prevMonths, nextMonths }: DateButtonProps) {
  return (
    <Wrapper>
      <Container>
        <button onClick={prevMonths}>
          <Text>이전 달</Text>
        </button>
      </Container>
      <Container>
        <button onClick={nextMonths}>
          <Text>다음 달</Text>
        </button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  gap: 0.1rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.orange300};
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: auto;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body1.regular}
  color: ${({ theme }) => theme.colors.orange500};
  margin: auto;
`;
