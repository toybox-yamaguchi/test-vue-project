module.exports = {
  root: true,
  globals:{
    //mocha
    describe:false, context:false, it:false, specify:false, before:false, after:false, beforeEach:false, afterEach:false
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'no-unused-vars': 0
  }
}
