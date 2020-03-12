const {override, fixBabelImports, addDecoratorsLegacy, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }, {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
    }, {
        libraryName: '@umijs/hooks',
        libraryDirectory: 'es',
    }),
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1890ff'
        },
    })
);
