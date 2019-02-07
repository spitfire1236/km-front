'use strict';

module.exports = {
    extends: 'stylelint-config-recommended',
    plugins: ['stylelint-scss'],
    rules: {
        'max-nesting-depth': 1,
    },
};
