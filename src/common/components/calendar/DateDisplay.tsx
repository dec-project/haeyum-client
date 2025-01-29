import { format } from 'date-fns';
import styled from 'styled-components';
import { DatePickerProps } from '.';

export default function DateDisplay({ startDate, endDate }: Pick<DatePickerProps, 'startDate' | 'endDate'>) {
  return (
    <Wrapper>
      <Container>
        {startDate || endDate ? (
          <>
            <Text>{startDate ? format(startDate, 'yyyy. MM. dd') : '선택되지 않음'}</Text>
            <Text>~</Text>
            <Text>{endDate ? format(endDate, 'yyyy. MM. dd') : '선택되지 않음'}</Text>
          </>
        ) : (
          <Text title="true">기간을 선택해주세요</Text>
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.orange300};
  border-radius: 4px;
  height: 56px;
  cursor: pointer;
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body1.regular}
  color: ${({ theme }) => theme.colors.orange500};
  padding: 16px;
  margin: ${({ title }) => (title ? '0' : 'auto')};
`;
