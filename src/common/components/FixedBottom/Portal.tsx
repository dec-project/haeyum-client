import { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container?: HTMLElement;
  children?: ReactNode;
}

const Portal = (props: PortalProps): ReactPortal => {
  const { container = document.body, children } = props;
  return ReactDOM.createPortal(children, container);
};

export default Portal;
