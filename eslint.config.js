import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';
export default tseslint.config(
  {
    ignores: ['**/build/**', '**/dist/**', '**/yarn/**', '**/public/**', '**/.*', "eslint.config.js"],
  },
  eslint.configs.recommended,
  prettier,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefreshPlugin,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // 사용자 정의 규칙
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true }, // React 컴포넌트만 내보내도록 하는 규칙
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입 명시 규칙 해제
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 사용시 에러 규칙
      '@typescript-eslint/no-empty-interface': 'error', // 빈 인터페이스 사용 시 에러 규칙
      '@typescript-eslint/no-var-requires': 'off', // require 사용 규칙 해제
      '@typescript-eslint/ban-types': 'off', // 특정 타입 사용 제한 규칙 해제
      '@typescript-eslint/no-non-null-assertion': 'off', // 비-널 단언 연산자 사용 규칙 해제
      '@typescript-eslint/no-empty-function': 'off', // 빈 함수 규칙 해제
      '@typescript-eslint/no-namespace': 'off', // 네임스페이스 사용 규칙 해제
      '@typescript-eslint/ban-ts-comment': 'off', // @ts-ignore 사용 규칙 해제

      'explicit-module-boundary-types': 'off', // 함수 반환 타입 명시 규칙 해제
      'no-unused-vars': 'warn', // 사용하지 않는 변수 사용시 에러 규칙 해제
      'no-var-requires': 'off', // require 사용 규칙 해제
      'ban-types': 'off', // 특정 타입 사용 제한 규칙 해제
      'no-non-null-assertion': 'off', // 비-널 단언 연산자 사용 규칙 해제
      'no-empty-function': 'off', // 빈 함수 규칙 해제
      'no-namespace': 'off', // 네임스페이스 사용 규칙 해제
      'ban-ts-comment': 'off', // @
      'no-undef': 'off', // 정의되지 않은 변수 사용 규칙 해제

      "prettier/prettier": "warn", 

      'jsx-a11y/alt-text': 'warn', // 이미지에 alt 속성 요구
      'jsx-a11y/anchor-has-content': 'warn', // 앵커 태그가 콘텐츠를 가져야 함
      'jsx-a11y/aria-role': 'warn', // 올바른 ARIA 역할 사용
      'jsx-a11y/label-has-associated-control': 'warn', // label에 컨트롤 연결 요구
      'jsx-a11y/no-autofocus': 'warn', // 자동 포커스 사용 제한
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn', // 비인터랙티브 요소에 인터랙티브 역할 제한
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.disableTypeChecked],
  }
);
