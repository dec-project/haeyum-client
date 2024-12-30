import { useCalendarStore } from '@/common/stores/useCalendarStore';
import styled from 'styled-components';

export default function DateDisplay() {
  const { startDate, endDate } = useCalendarStore();
  return (
    <Wrapper>
      <Container>
        {startDate || endDate ? (
          <>
            <Text>{startDate ? startDate.toLocaleDateString() : '선택되지 않음'}</Text>
            <Text>~</Text>
            <Text>{endDate ? endDate.toLocaleDateString() : '선택되지 않음'}</Text>
          </>
        ) : (
          <Text>기간을 선택해주세요</Text>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 225px;
  border: 1px solid ${({ theme }) => theme.colors.orange300};
  border-radius: 0.25rem;
  padding: 0.875rem;
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body1.regular}
  color: ${({ theme }) => theme.colors.orange500};
  margin: 0 0.75rem;
`;
