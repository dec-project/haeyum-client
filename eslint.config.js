import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default tseslint.config(
  {
    ignores: ['**/build/**', '**/dist/**', '**/yarn/**', '**/public/**', '**/.*'],
  },
  eslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefreshPlugin,
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
      '@typescript-eslint/no-unused-vars': 'error', // 사용하지 않는 변수 사용시 에러 규칙
      '@typescript-eslint/no-empty-interface': 'error', // 빈 인터페이스 사용 시 에러 규칙
      '@typescript-eslint/no-var-requires': 'off', // require 사용 규칙 해제
      '@typescript-eslint/ban-types': 'off', // 특정 타입 사용 제한 규칙 해제
      '@typescript-eslint/no-non-null-assertion': 'off', // 비-널 단언 연산자 사용 규칙 해제
      '@typescript-eslint/no-empty-function': 'off', // 빈 함수 규칙 해제
      '@typescript-eslint/no-namespace': 'off', // 네임스페이스 사용 규칙 해제
      '@typescript-eslint/ban-ts-comment': 'off', // @ts-ignore 사용 규칙 해제
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.disableTypeChecked],
  }
);
