import React, { forwardRef } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

type FixedBottomProps = {
  children: React.ReactNode;
};

const FixedBottom = forwardRef<HTMLDivElement, FixedBottomProps>(({ children, ...rest }, ref) => {
  return (
    <Portal>
      <BottomContainer ref={ref} {...rest}>
        {children}
      </BottomContainer>
    </Portal>
  );
});

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 500;
  padding: 0px 16px 16px 16px;
  width: 100%;
  min-width: var(--min-width);
  max-width: var(--max-width);
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.themeColors.background};
`;

export default FixedBottom;
