module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "react/jsx-filename-extension": [1, {
            extensions: [".js", ".jsx"]
        }],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "indent": ["error", 2],
        "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "camelcase": 0,
        "no-underscore-dangle": 0,
        "react/prop-types": [2, { ignore: ['children', 'render', 'match', 'location', 'history'] }],
        "import/no-named-as-default": 0,
        semi: ["warn", "always"],
        "comma-dangle": ["warn",{
            "arrays": "always",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        'key-spacing': ['warn', {mode: 'strict'}],
        'comma-spacing': ["warn", { "before": false, "after": true }],
        'array-bracket-spacing': ['warn', 'always'],
        'object-curly-spacing': ["warn", "always"],
        'no-unused-vars': process.env.NODE_ENV === 'production' ? ['error'] : ['warn'],
        "react/prop-types": 0
    },
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        jest: true,
    }
}