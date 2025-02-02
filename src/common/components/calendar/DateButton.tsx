import styled from 'styled-components';

interface DateButtonProps {
  prevMonths: () => void;
  nextMonths: () => void;
}

export default function DateButton({ prevMonths, nextMonths }: DateButtonProps) {
  return (
    <Wrapper>
      <Container onClick={prevMonths}>
        <button>
          <Text>이전 달</Text>
        </button>
      </Container>
      <Container onClick={nextMonths}>
        <button>
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
  padding: 1rem 0;
  gap: 0.3rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.orange300};
  border-radius: 0.25rem;
  padding: 8px;
  margin: auto;
  cursor: pointer;
  button {
    background: none;
    border: none;
  }
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.nav.regular}
  color: ${({ theme }) => theme.colors.orange500};
  margin: auto;
`;
