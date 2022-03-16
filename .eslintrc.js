module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "no-plusplus": 0,
    "no-console": 0,
    "linebreak-style": 0,
    "global-require": 0,
    "vue/no-v-html": 0,
    "vue/require-prop-types": 0,
    "eslint linebreak-style": [
      0,
      "error",
      "windows"
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "htmlWhitespaceSensitivity": "ignore",
        "semi": false,
        "singleQuote": true
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "any"
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
