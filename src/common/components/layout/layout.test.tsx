import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './index';

describe('<Layout />', () => {
  it('레이아웃 내부의 항목을 렌더링한다.', () => {
    const children = '하위 항목 테스트';
    render(<Layout>{children}</Layout>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
