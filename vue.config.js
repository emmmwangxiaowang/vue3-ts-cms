const { defineConfig } = require("@vue/cli-service");
const path = require('path');
// const { config } = require("process");

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { resolve } = require("path");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: './build',
    // devServer: {
    //     proxy: {
    //         '^/axios-server': {
    //             target: 'http://localhost:8088',
    //             pathRewrite: {
    //                 '^/axios-server': ''
    //             },
    //             changeOrigin: true
    //         }
    //     }
    // },
    // 配置方式一
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                'component': '@/components'
            }
        },
        plugins: [
            // 自动导入
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        module: {
            rules: [
                //   {
                //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                //     use: [{
                //         loader: 'image-webpack-loader',
                //         options: { bypassOnDebug: true }
                //     }]
                // },
                {
                    test: /\.('svg')$/,
                    use: [{
                        loader: 'svg-sprite-loader'
                    }]
                }
            ]
        }
    },


    // 配置方式二
    // configureWebpack: (config) => {
    //     config.resolve.alias = {
    //         '@': path.resolve(__dirname, 'src'),
    //         components: '@/components'
    //     }
    // }

    // 配置方式三
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', path.resolve(__dirname, 'src'))
    //         .set('component', '@/components')
    // }
});