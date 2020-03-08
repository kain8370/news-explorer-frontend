module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "no-underscore-dangle":  ["error", { "allow": ["_", "_id", "_validateInputElement", "_toggleButton", "_makeButtonUnactive", "_getDateFrom7", "_getDateNow", "_makeButtonActive"] }],
      "no-console": 0,
      "linebreak-style": 0
    },
   "extends": "airbnb-base"
};