module.exports = {
    extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
    // Add custom rules here
    rules: {
        'class-methods-use-this': 0,
        'import/prefer-default-export': 0,
    },
};