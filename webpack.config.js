module.exports = {

    entry: "./src/entry.js",

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /pixi.js/, loader: "script" },
            { test: /phaser.js/, loader: "script" }
        ]
    }
};