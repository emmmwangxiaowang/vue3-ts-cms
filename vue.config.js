const { defineConfig } = require("@vue/cli-service");
const path = require('path');
// const { config } = require("process");

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { resolve } = require("path");
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './build',
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
        ]
    }

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
