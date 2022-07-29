module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion : 2020,
    parser      : '@typescript-eslint/parser',
  },

  rules: {
    'indent'          : [ 'error', 2 ],
    'linebreak-style' : [ 'error', 'unix' ],
    'quotes'          : [ 'error', 'single' ],
    'semi'            : [ 'error', 'never' ],
    'comma-dangle'    : [ 'error', 'always-multiline' ],
    'no-var'          : [ 'error' ],
    'no-multi-spaces' : [ 'error', { exceptions: { Property: true, TSPropertySignature: true } } ],
    'key-spacing'     : [ 'error', { align: { beforeColon: true, afterColon: true, mode: 'minimum', on: 'colon' } } ],
    'vue/multi-word-component-names' : 'off',
    'no-console'      : [ (process.env.NODE_ENV === 'production' ? 'error' : 'warn'), { allow: [ 'warn', 'error' ] }],
    'no-debugger'     : process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/typescript',
  ],
}
