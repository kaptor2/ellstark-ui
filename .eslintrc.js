module.exports = {
  root: true,
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'json-format', 'unused-imports'],
  overrides: [
    {
        files: ['*.tsx'],
        rules: {
            'max-lines-per-function': [
                'error',
                {max: 100, skipBlankLines: true, skipComments: true},
            ],
        },
    },
    {
        files: ['*.tsx', '*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        },
    },
    {
        files: ['*.test.tsx', '*.test.ts', '*.stories.tsx'],
        rules: {
            'max-lines-per-function': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
            'max-nested-callbacks': 'off',
        },
    },
],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/array-type': [
        'error',
        {
            default: 'array-simple',
        },
    ],
    '@typescript-eslint/ban-types': [
        'error',
        {
            types: {
                Object: {
                    message: 'Avoid using the `Object` type. Did you mean `object`?',
                },
                Function: {
                    message:
                        'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
                },
                Boolean: {
                    message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                },
                Number: {
                    message: 'Avoid using the `Number` type. Did you mean `number`?',
                },
                String: {
                    message: 'Avoid using the `String` type. Did you mean `string`?',
                },
                Symbol: {
                    message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                },
            },
        },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'no-public',
        },
    ],
    '@typescript-eslint/indent': [
        'off',
        4,
        {
            FunctionDeclaration: {
                parameters: 'first',
            },
            FunctionExpression: {
                parameters: 'first',
            },
        },
    ],
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
        },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/quotes': [
        'error',
        'single',
        {
            avoidEscape: true,
        },
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/triple-slash-reference': [
        'off',
        {
            path: 'always',
            types: 'prefer-import',
            lib: 'always',
        },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-magic-numbers': [
        'error',
        {
            ignore: [0, 1, -1, 2],
            ignoreArrayIndexes: true,
            detectObjects: true,
            ignoreEnums: true,
        },
    ],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['off', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'default-case': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': 'error',
    'id-match': 'error',
    'import/first': 'error',
    'import/order': [
        'error',
        {
            groups: ["builtin", "external", "parent", "sibling", "index"],
            'newlines-between': 'always',
        },
    ],
    'import/no-unresolved': 'off',
    "unused-imports/no-unused-imports": "warn",
    'max-classes-per-file': ['error', 1],
    'max-lines-per-function': [
        'error',
        {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    'max-nested-callbacks': [
        'error',
        {
            max: 3,
        },
    ],
    'max-lines': ['error', 500],
    'max-len': 'off',
    'new-parens': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-prototype-builtins': 'off',
    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
        },
    ],
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-shadow': [
        'off',
        {
            hoist: 'all',
        },
    ],
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
        'error',
        {
            blankLine: 'always',
            prev: '*',
            next: 'return',
        },
        {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
        {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        {blankLine: 'always', prev: ['case', 'default'], next: '*'},
        {blankLine: 'always', prev: ['block'], next: '*'},
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'max-params': ['error', {max: 3}],
    'react/jsx-max-depth': ['error', {max: 5}],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-tag-spacing': [
        1,
        {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'allow',
        },
    ],
}
};
