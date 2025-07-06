import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	...tseslint.config(
		{ignores: ['dist', 'vite.config.ts', 'vite/**']},
		{
			extends: [
				js.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
			],
			files: ['**/*.{ts,tsx}'],
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: globals.browser,
				parserOptions: {
					project: ['./tsconfig.node.json', './tsconfig.app.json'],
					tsconfigRootDir: import.meta.dirname,
				},
			},
			plugins: {
				import: eslintPluginImport,
				'react-hooks': reactHooks,
				'react-refresh': reactRefresh,
				'eslint-comments': eslintComments,
			},
			rules: {
				...reactHooks.configs.recommended.rules,
				'react-refresh/only-export-components': [
					'warn',
					{allowConstantExport: true},
				],
				'import/no-default-export': 'error',
				'import/prefer-default-export': 'off',
				eqeqeq: ['error', 'always'],
				'react/prop-types': 'off',
				'react/react-in-jsx-scope': 'off',
				'no-var': 'error',
				'react-hooks/rules-of-hooks': 'error',
				'react-hooks/exhaustive-deps': 'warn',
				'eslint-comments/no-use': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
			},
		}
	),
	eslintConfigPrettier,
];
