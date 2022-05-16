module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "espree",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  globals: {
    defineProps: "readonly",
  },
};
