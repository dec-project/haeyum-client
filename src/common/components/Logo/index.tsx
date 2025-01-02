import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';

const Logo = () => {
  return (
    <div>
      <Img src={logo} alt="logo" />
    </div>
  );
};

const Img = styled.img`
  width: 80px;
  height: 36px;
`;

export default Logo;
