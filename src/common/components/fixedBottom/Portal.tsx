import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface GlobalPortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: GlobalPortalProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const handleRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (!container && el) {
        setContainer(el);
      }
    },
    [container],
  );

  return (
    <>
      {container && createPortal(children, container)}
      <div id="portal-container" ref={handleRef} />
    </>
  );
};

export default Portal;
