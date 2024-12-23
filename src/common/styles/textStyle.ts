import { css } from 'styled-components';

const mainTitle = css`
  ${({ theme }) => theme.fontSizes.large}
  font-weight: 600;
  ${({ theme }) => theme.colors.black}
`;

const subTitle = css`
  ${({ theme }) => theme.fontSizes.small}
  font-weight: 400;
  ${({ theme }) => theme.colors.black}
`;

const inputText = css`
  ${({ theme }) => theme.fontSizes.small}
  font-weight: 400;
  ${({ theme }) => theme.colors.brown}
`;

const infoText = css`
  ${({ theme }) => theme.fontSizes.xs}
  font-weight: 400;
  ${({ theme }) => theme.colors.brown}
`;

const iconText = css`
  ${({ theme }) => theme.fontSizes.base}
  font-weight: 400;
`;

const newsTitle = css`
  ${({ theme }) => theme.fontSizes.large}
  font-weight: 600;
  ${({ theme }) => theme.colors.black}
`;

export default {
  mainTitle,
  subTitle,
  inputText,
  infoText,
  iconText,
  newsTitle,
};
