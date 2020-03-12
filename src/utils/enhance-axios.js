import qs from 'qs';
import axios from 'axios';
import {message} from 'antd';
import {
    get as _get,
    isEmpty as _isEmpty,
} from 'lodash';
// 使用自定义配置新建一个 axios 实例
const instance = axios.create({
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)，如果请求花费了超过 `timeout` 的时间，请求将被中断
    timeout: 10 * 1000,
    // `headers` 是即将被发送的自定义请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
    // `responseType` 表示服务器响应的数据类型，可以是 'arrayBuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
        return status >= 200 && status < 300; // 默认的
    },
});

/**
 * 添加请求拦截器:在请求或响应被 then 或 catch 处理前拦截它们。
 */
instance.interceptors.request.use(function (config) {
    const contentType = _get(config, ['headers', 'Content-Type']) || '';
    if (/x-www-form-urlencoded/.test(contentType)) { // form表单的形式
        config.data = qs.stringify(config.data); // form表单形式发送的json数据要先进行序列化
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
        if (response.data.status && response.data.message) {
            message.error(response.data.message, 1.5);
        }
        return response.data;

    },
    function (error) {
        const {response = {}} = error;
        if (_isEmpty(response)) {
            message.error('请求超时', 1.5); // 主要是针对超时
        } else {
            const {statusText = '', status = ''} = response;
            message.error(`${statusText} ${status}`, 1.5);
        }
        return Promise.reject(error);
    });

export default instance;