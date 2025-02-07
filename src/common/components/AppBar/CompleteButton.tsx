import { Button } from './CommonStyle';
import styled from 'styled-components';

const CompleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <Text>완료</Text>
    </Button>
  );
};

const Text = styled.span`
  ${({ theme }) => theme.typography.title3.bold}
  cursor: pointer;
  color: ${({ theme }) => theme.themeColors.primary};
`;

export default CompleteButton;
