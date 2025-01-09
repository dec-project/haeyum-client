import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import styledComponentsA11y from 'eslint-plugin-styled-components-a11y';
import eslintPluginVitest from '@vitest/eslint-plugin';

export default tseslint.config(
  {
    ignores: [
      '**/build/**',
      '**/dist/**',
      '**/.yarn/**',
      '**/public/**',
      '**/.pnp.cjs',
      '**/.pnp.loader.mjs',
      '.storybook/**',
      '**/*.stories.tsx',
      '**/*.stories.ts',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefreshPlugin,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
      'styled-components-a11y': styledComponentsA11y,
      vitest: eslintPluginVitest,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 사용자 정의 규칙
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true }, // React 컴포넌트만 내보내도록 하는 규칙
      ],

      'prettier/prettier': 'warn', // prettier 규칙

      'jsx-a11y/alt-text': 'warn', // 이미지에 alt 속성 요구
      'jsx-a11y/anchor-has-content': 'warn', // 앵커 태그가 콘텐츠를 가져야 함
      'jsx-a11y/aria-role': 'warn', // 올바른 ARIA 역할 사용
      'jsx-a11y/no-autofocus': 'warn', // 자동 포커스 사용 제한
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn', // 비인터랙티브 요소에 인터랙티브 역할 제한
      'jsx-a11y/label-has-associated-control': [
        'warn',
        { labelComponents: ['label'], labelAttributes: ['htmlFor'], controlComponents: ['input'] }, // 레이블과 연결된 컨트롤 요구
      ],
      'jsx-a11y/label-has-for': ['warn', { required: { every: ['id'] } }], // 레이블에 id 연결 요구

      'styled-components-a11y/alt-text': 'error', // styled-components에 적용되는 규칙
      'styled-components-a11y/anchor-has-content': 'warn',
      'styled-components-a11y/aria-role': 'warn',
      'styled-components-a11y/label-has-associated-control': 'warn',
      'styled-components-a11y/no-autofocus': 'warn',
      'styled-components-a11y/no-noninteractive-element-to-interactive-role': 'warn',

      'vitest/expect-expect': 'warn',
      'vitest/no-disabled-tests': 'warn',
      'vitest/consistent-test-it': ['warn', { fn: 'it', withinDescribe: 'it' }],
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslint.configs.recommended,
);
