module.exports = {
    root: true,
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:jsdoc/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': [
            'error',
            {
                code: 120,
                comments: 120,
                tabWidth: 4,
                ignoreUrls: false,
                ignoreTrailingComments: false,
                ignoreComments: false,
            },
        ],
        'jsdoc/tag-lines': [
            'warn',
            'any',
            {
                startLines: 1,
            },
        ],
        'jsdoc/valid-types': 'off',
    },
};
