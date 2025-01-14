import styled from 'styled-components';

interface SearchInputProps {
  placeholder: string;
  onClick: () => void;
}

const SearchInput = ({ placeholder, onClick }: SearchInputProps) => {
  return <Input placeholder={placeholder} onClick={onClick} />;
};

const Input = styled.input`
  margin-bottom: 12px;
  padding: 0 15px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.themeColors.border};
  border-radius: 4px;
  ${({ theme }) => theme.typography.body1.regular};
  &::placeholder {
    color: ${({ theme }) => theme.themeColors.textSecondary};
  }
`;

export default SearchInput;
