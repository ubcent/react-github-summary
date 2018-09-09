module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
