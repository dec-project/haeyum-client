const newsData = {
  itemList: [
    {
      category: '종합',
      title: '아폴로17, 월면 활동 개시',
      content: '아폴로 17호는 1972년 12월 7일 미국 미국항공우주국(NASA)에 의해 발사된 유인 우주선이다.',
      url: 'https://news.example.com/general',
    },
    {
      category: '연예',
      title: '애플 CEO도 트럼프에 15억 기부… 빅테크 줄줄이 뭉칫돈',
      content: '미국 빅테크 업계 거물들이 잇따라 트럼프 취임위원회에 거액을 내놓고 있다.',
      url: 'https://news.example.com/entertainment',
    },
    {
      category: '스포츠',
      title: '맨체스터 시티가 돌아왔다!',
      content:
        '우리가 알던 맨체스터 시티(이하 맨시티)가 돌아왔다. 엘링 홀란의 멀티골과 사비뉴의 2도움 맹활약을 앞세워 웨스트햄 유나이티드를 4-1로 꺾고 2연승을 질주했다.',
      url: 'https://news.example.com/sports',
    },
    {
      category: 'IT',
      title: 'MS “AI 데이터센터 구축에 연간 800억달러 투자할 것',
      content:
        '마이크로소프트(MS)가 인공지능(AI) 기술 구현을 위한 데이터센터에 연간 800억달러(약 117조7천600억원)를 투자한다고 3일(현지시간) 밝혔습니다.',
      url: 'https://news.example.com/tech',
    },
  ],
};

const weatherData = {
  weather: '흐림',
  img: 'https://res.cloudinary.com/dsapqefbg/image/upload/v1736013494/sunny_wgj9nj.png',
};

const musicData = {
  songSummaries: [
    {
      songId: 1,
      title: 'Die With A Smile',
      artist: ['Lady Gaga', 'Bruno Mars'],
      ranking: 1,
      imgUrl:
        'https://cdnimg.melon.co.kr/cm2/album/images/115/68/901/11568901_20240816130602_500.jpg/melon/resize/120/quality/80/optimize',
    },
    {
      songId: 2,
      title: 'STAY',
      artist: ['The Kid LAROI', 'Justin Bieber'],
      ranking: 2,
      imgUrl:
        'https://cdnimg.melon.co.kr/cm2/album/images/106/46/395/10646395_20210707141710_500.jpg/melon/resize/120/quality/80/optimize',
    },
    {
      songId: 3,
      title: 'Dangerously',
      artist: ['Charlie Puth'],
      ranking: 3,
      imgUrl:
        'https://cdnimg.melon.co.kr/cm/album/images/023/36/926/2336926_500.jpg/melon/resize/120/quality/80/optimize',
    },
    {
      songId: 4,
      title: 'Older',
      artist: ['Sasha Alex Sloan'],
      ranking: 4,
      imgUrl:
        'https://cdnimg.melon.co.kr/cm/album/images/102/20/418/10220418_500.jpg/melon/resize/120/quality/80/optimize',
    },
    {
      songId: 5,
      title: 'Beautiful Things',
      artist: ['Benson Boone'],
      ranking: 5,
      imgUrl:
        'https://cdnimg.melon.co.kr/cm2/album/images/114/01/422/11401422_20240930152842_500.jpg/melon/resize/120/quality/80/optimize',
    },
  ],
};

const movieData = {
  itemList: [
    {
      movieId: 1,
      ranking: 1,
      title: '조커',
      img: 'https://upload.wikimedia.org/wikipedia/ko/3/31/%EC%A1%B0%EC%BB%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    },
    {
      movieId: 2,
      ranking: 2,
      title: '모아나',
      img: 'https://www.chosun.com/resizer/v2/I5NQAWGL7RDMZBUKX52QLL4RWA.jpg?auth=dff6f26b2c40bedff43f2244d0bda5cd4b2a4c08a53190846e9fbe97fd8bd9e8&width=1280',
    },
    {
      movieId: 3,
      ranking: 3,
      title: '인셉션',
      img: 'https://upload.wikimedia.org/wikipedia/ko/1/1d/%EC%9D%B8%EC%85%89%EC%85%98.jpg',
    },
    {
      movieId: 4,
      ranking: 4,
      title: '인터스텔라',
      img: 'https://i.namu.wiki/i/qnfv6dUwAyq5eu94FAsUB5FQZ4QY7y6nZk2f5NtoahVUx09rr9ikkghsa3ZaqGD0ZhIfWi6kKi9HBMgZ7Nfc8w.webp',
    },
    {
      movieId: 5,
      ranking: 5,
      title: '다크 나이트',
      img: 'https://i.namu.wiki/i/K0jk_ckp7uB8kISisIwUlW8G56hgQ6V-mtmOCCpNjgZ5JlSAq0GGDS9YJf7nlvXgEW2vwU6gvCAZeWpVw_-jFA.webp',
    },
  ],
};

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const DEFAULT_WEATHER_IMAGE = 'https://res.cloudinary.com/dsapqefbg/image/upload/v1736013494/sunny_wgj9nj.png';

export { newsData, weatherData, movieData, musicData, DEFAULT_IMAGE, DEFAULT_WEATHER_IMAGE };
