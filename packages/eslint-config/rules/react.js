module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-uses-react': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-useless-fragment': 1,
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                shorthandLast: true,
                noSortAlphabetically: true,
                reservedFirst: true,
            },
        ],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
            },
        ],
        'react/forbid-component-props': [1, { forbid: ['style'] }],
        'react/no-access-state-in-setstate': 1,
        'react/no-array-index-key': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-redundant-should-component-update': 1,
        'react/no-this-in-sfc': 1,
        'react/no-unsafe': 1,
        'react/no-unstable-nested-components': ['warn'],
        'react/no-unused-prop-types': ['error'],
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error'],
        'react/prefer-es6-class': ['error'],
        'react/sort-comp': ['error'],
        'react/state-in-constructor': ['off'],
        'react/style-prop-object': ['error'],
        'react/void-dom-elements-no-children': ['error'],
        'react/jsx-handler-names': ['error'],
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
