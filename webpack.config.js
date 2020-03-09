const path = require('path');

const {
    NODE_ENV = 'development',
} = process.env;

const BUILD_DIR = 'build';

module.exports = {
    entry: path.resolve('src', 'index.ts'),

    mode: NODE_ENV,

    target: 'node',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
        ],
    },

    output: {
        filename: 'index.js',
        path: path.resolve(BUILD_DIR),
        libraryTarget: 'commonjs',
    },

    /**
     * Нужно для restana
     */
    externals: [
        /^[a-z\-0-9]+$/,
    ]
};
