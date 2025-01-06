import styled from 'styled-components';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.themeColors.border};
  border-top: 4px solid ${({ theme }) => theme.themeColors.primary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1.1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
