import styled from 'styled-components';
import logo from '../../assets/logo/logo.svg';

const Logo = () => {
  return (
    <div>
      <Img src={logo} alt="logo" />
    </div>
  );
};

const Img = styled.img`
  width: 80%;
  height: 80%;
`;

export default Logo;
