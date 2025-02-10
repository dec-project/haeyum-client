# HAEYUM

[1. 소개](#1-소개)<br/>
[2. PRD, 와이어 프레임, 디자인](#2-prd-와이어-프레임-디자인)<br/>
[3. 주요 기능](#3-주요-기능)<br/>
[4. 개발 과정](#4-개발-과정)<br/>
[5. 멤버 구성](#5-멤버-구성)<br/>
[6. 개발 기간](#6-개발-기간)<br/>
[7. 기술 스택 및 라이브러리](#7-기술-스택-및-라이브러리)<br/>
[8. 프로젝트 실행 방법](#8-프로젝트-실행-방법)<br/>
[9. 그라운드 룰](#9-그라운드-룰)<br/>


## 1\. 소개

헤윰은 사용자가 특정 기간을 선택하면 해당 날짜의 뉴스, 날씨, 음악 차트 TOP 5, 영화 차트 TOP 5를 보여주는 디지털 여행 플랫폼입니다. 또, 해당 시대별 채팅방을 제공해 추억을 공유할 수 있습니다.

https://github.com/user-attachments/assets/e716fbf0-24c9-493a-aedd-a656f33b0a58


## 2. PRD, 와이어 프레임, 디자인

- [PRD](https://www.notion.so/berlin-paris-london/PRD-160ea610f98a807eaddde75b959ae038?pvs=4)


- [Wireframe](https://www.figma.com/design/vLhGTebCbboGPPXBkuF1XB/DEC?node-id=45-8947&p=f&t=Idkn71SzyJrqEGiU-0)

  <img src='https://res.cloudinary.com/dsapqefbg/image/upload/v1739174843/wireframe_2_t9afrz.png' width="80%">

- [Design](https://www.figma.com/design/vLhGTebCbboGPPXBkuF1XB/DEC?node-id=332-20988&p=f&t=Idkn71SzyJrqEGiU-0)

  <img src='https://res.cloudinary.com/dsapqefbg/image/upload/v1739174289/design_ptegcn.png' width="80%">


## 3\. 주요 기능
**1. 날짜 기반 검색**
- 사용자가 원하는 기간을 선택하면 해당 시기의 뉴스, 날씨, 음악 차트, 영화 정보를 제공
- 제공 데이터 (뉴스, 날씨, 영화 데이터는 자정 업데이트)
  - 뉴스: 1970년 1월 1일 ~ 전날까지 (휴간일 있음)
  - 날씨: 1970년 1월 1일 ~ 전날까지
  - 노래: 1984년 3월 8일 ~ 2025년 1월 26일
  - 영화: 2003년 11월 11일 ~ 전날까지


**2. 뉴스**
- 선택한 기간의 주요 뉴스와 기사 요약 제공
- 일부 뉴스는 기사 이미지 제공


**3. 날씨**
- 선택한 날짜의 날씨 데이터 제공


**4. 음악 차트**
- 해당 날짜의 인기 음악 랭킹 TOP 5 제공
- 앨범 이미지, 곡 정보, 가사, 아티스트, 장르 표시
- 해당 곡 영상 재생 가능


**5. 영화 차트**
- 해당 날짜의 영화 랭킹 TOP 5 제공
- 영화 포스터 및 줄거리 표시
- 트레일러 영상 제공


**6. 시대별 채팅방 (회원)**
- 선택한 기간에 대한 사용자 간 소통 공간 제공
- 특정 시대의 기억을 공유할 수 있는 채팅 기능


**7. 찜 기능 (회원)**
- 원하는 날짜의 여행 페이지 저장 기능


**8. 프로필 수정 (회원)**
- 프로필 이미지 및 프로필 명 수정 기능


## 4\. 개발 과정

**1. User Story 중심 개발 ([스토리 보드](https://github.com/orgs/dec-project/projects/14/views/16), [노션](https://berlin-paris-london.notion.site/162ea610f98a800dbdd1f9abf5bcbea5?pvs=4))**
- User Story를 생성해 기능별로 분류
- Sprint 단위(1주)로 Task를 계획, 우선 순위 지정
- 각 기능들을 하나의 완성된 스토리가 되도록 정의
  - 예: `사용자는 실시간 인기 검색 Top5 중 원하는 트립카드를 선택해 여행 페이지로 이동할 수 있다.`


**2. Sprint 프로세스 ([스프린트 보드](https://github.com/orgs/dec-project/projects/14/views/19), [노션](https://www.notion.so/berlin-paris-london/DEC-140ea610f98a809d995dcc48537f2a45?pvs=4#157ea610f98a80dda28ddb4f8f0a6631))**
- 월요일: 스토리 Task 회의
- 목요일: 중간 미팅 및 기간 조정
- 일요일: 스토리 리뷰 및 회고


## 5\. 멤버 구성

| 이름   | 담당 업무                 |
| ----- | ----------------------- |
| 곽진영(팀장) | 기획/디자인/FE 개발   |
| 김하진 | BE 개발 리드              |
| 오하민 | FE 개발                  |
| 김상균 | BE 개발                  | 


## 6\. 개발 기간

- 총 기간: 2024.12.9 - 2025.1.26 (7주)
- 기획/디자인 2주 + 개발 5주


## 7\. 기술 스택 및 라이브러리

- React, TypeScript
- Vite, Yarn
- React Router Dom
- TanStack Query, Zustand
- Styled-components
- ESLint, Prettier
- Axios, Stompjs, Sockjs-client
- Date-fns, DOMPurify
- React Intersection Observer, Embla Carousel
- React Helmet Async
- S3, Cloudfront


## 8\. 프로젝트 실행 방법

**1. Yarn PnP SDK 설치**

- VScode에서 TypeScript, ESLint, Prettier와 같은 도구가 정상적으로 동작하도록 Yarn PnP SDK 설정

```bash
yarn dlx @yarnpkg/sdks vscode
```


**2. 프로젝트 설치 및 실행**

```bash
yarn install
yarn dev
```


## 9\. 그라운드 룰

**1. 커뮤니케이션**
- 공식 협업 툴: Discord, Notion 사용
- 데일리 스크럼 및 회의록은 Notion에 정리하여 관리


**2. 일정 및 회의**
- 데일리 스크럼: 매일 AM 09:30 - 10:00
- 정규 미팅: 월, 목, 일 AM 10:00 - 10:30
- 진행 상황 공유: Discord 및 GitHub Issues 활용
- 일정 지연이 예상될 경우 미리 공유


**3. 코드 작성 및 협업 규칙**
- [디렉토리 구조 및 코드 스타일 가이드
](https://berlin-paris-london.notion.site/165ea610f98a80ddbdd5d3a5ba26971f?pvs=4)


**4. Git 컨벤션 ([링크](https://berlin-paris-london.notion.site/Git-f74c7a92d6ee428a883e845875336238?pvs=4))**
- feat: 새로운 기능을 추가할 경우
- fix: 버그를 고친 경우
- style: 코드 포맷 변경, 간단한 수정, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- docs: 문서를 수정한 경우
- chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우
- rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- remove: 파일을 삭제하는 작업만 수행한 경우


**5. PR 및 코드 리뷰 규칙**
- 기능 구현 후 PR 요청
- 1명의 코드 리뷰 승인 후 머지 가능
- 리뷰는 Pn 룰을 사용
  - P1: 꼭 반영해주세요
  - P2: 적극적으로 고려해주세요
  - P3: 웬만하면 반영해 주세요
  - P4: 반영해도 좋고 넘어가도 좋습니다
  - P5: 그냥 사소한 의견입니다

    <details>
    <summary>적용 예시 (더보기)</summary>
      
      - [#66 마이페이지 컴포넌트 추가](https://github.com/dec-project/haeyum-client/pull/66)
      - [#29 검색 결과 리스트 페이지 구현](https://github.com/dec-project/haeyum-client/pull/29)


    </details>

- feature -> develop 은 rebase merge 사용
- develop -> main은 merge commit 사용
  - release 과정에서 문제가 발생할 경우, merge commit으로 어떤 시점의 develop 브랜치가 main에 머지되었는지 확인 가능