module.exports = {
    root: true,
    parser: 'vue-eslint-parser', // <= importante para Vue SFC
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module'
    },

    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    rules: {
        // regras personalizadas aqui
    }
}
