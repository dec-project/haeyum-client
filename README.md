# HAEYUM

## 1. 프로젝트 실행 방법

1-1. Yarn PnP SDK 설치
- VScode에서 TypeScript, ESLint, Prettier와 같은 도구가 정상적으로 동작하도록 Yarn PnP SDK 설정

```bash
yarn dlx @yarnpkg/sdks vscode
```

1-2. 프로젝트 설치 및 실행

```bash
yarn install
yarn dev
```


## git 컨벤션

- feat: 새로운 기능을 추가할 경우
- fix: 버그를 고친 경우
- style: 코드 포맷 변경, 간단한 수정, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- docs: 문서를 수정한 경우(ex> Swagger)
- chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우
- rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- remove: 파일을 삭제하는 작업만 수행한 경우