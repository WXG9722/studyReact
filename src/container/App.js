import React from 'react';
import Router from './Router';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Router />
        </ConfigProvider>
    );
};

export default App;
