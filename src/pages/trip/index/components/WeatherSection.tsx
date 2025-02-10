import styled from 'styled-components';
import { useWeather } from '../hooks/useWeather';
import { BASE_URL } from '@/config';

interface WeatherSectionProps {
  calendarId: string;
}

const WeatherSection = ({ calendarId }: WeatherSectionProps) => {
  const { data: weatherData, isError } = useWeather(calendarId);

  if (isError || !weatherData) {
    return null;
  }

  return (
    <Section>
      <ContentWrapper>
        <WeatherHeader>오늘의 날씨</WeatherHeader>
        <ContentSubTitle>{weatherData.weather}</ContentSubTitle>
      </ContentWrapper>
      <WeatherImage src={`${BASE_URL}${weatherData.imgUrl}`} alt={`${weatherData.weather}`} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ContentSubTitle = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const WeatherHeader = styled.h3`
  ${({ theme }) => theme.typography.body1.bold};
`;

const WeatherImage = styled.img`
  width: 8.125rem;
  border-radius: 4px;
`;

export default WeatherSection;
