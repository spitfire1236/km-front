module.exports = {
    extends: ['./index', './rules/react'].map(require.resolve),
    rules: {
        'unicorn/filename-case': 0,
        'unicorn/no-null': 0,
    },
};
