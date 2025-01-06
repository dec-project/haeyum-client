import styled from 'styled-components';
import useWeather from '../hooks/useWeather';
import { DEFAULT_WEATHER_IMAGE } from './data';
import LoadingSpinner from '@/common/components/spinner';

interface WeatherSectionProps {
  calendarId: string;
}

const WeatherSection = ({ calendarId }: WeatherSectionProps) => {
  const { data: weatherData, isLoading, isError } = useWeather(calendarId);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !weatherData) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>날씨 데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <Section>
      <ContentWrapper>
        <WeatherHeader>오늘의 날씨</WeatherHeader>
        <ContentSubTitle>{weatherData.weather}</ContentSubTitle>
      </ContentWrapper>
      <WeatherImage
        src={weatherData.img}
        alt="weather"
        // TODO: 임시 기본 이미지
        onError={(e) => {
          e.currentTarget.src = DEFAULT_WEATHER_IMAGE;
        }}
      />
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
