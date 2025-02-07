import styled from 'styled-components';
import logo from '../../assets/logo/logo.svg';

const Logo = () => {
  return <Img src={logo} alt="logo" />;
};

const Img = styled.img`
  width: 100px;
  height: 42px;
  overflow: hidden;
  object-fit: cover;
`;

export default Logo;
