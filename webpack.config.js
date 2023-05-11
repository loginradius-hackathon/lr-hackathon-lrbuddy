"use strict";

const path = require("path");
const { pathToFileURL } = require("url");

/** @typedef {import("webpack").Configuration} WebpackConfig **/

/** @type {WebpackConfig} */
const Config_Base = {
    context: __dirname,
    entry: {
        main: "./src/extension.ts",
    },
    include:[ path.resolve(__dirname,'out/model.nlp')],
    resolve: {
        extensions: [".ts", ".js"],
        mainFields: ["module", "main"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    externals: {
        vscode: "commonjs vscode", // It is only present in the VS Code extension hosts.
    },
    devtool: "nosources-source-map",
};

/** @type {WebpackConfig} */
const Config_Node = {
    ...Config_Base,
    name: "node",
    target: "node14",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist", "node"),
        library: { type: "commonjs2" },
        // Don't use `absoluteResourcePath`, as it's often not a file system path.
        devtoolModuleFilenameTemplate: (info) => pathToFileURL(path.resolve(__dirname, info.resourcePath)).href,
    },
};

module.exports = [Config_Node];