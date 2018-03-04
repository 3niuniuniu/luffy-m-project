/**
 * by chenyao
 */

import { localStorage } from './localStorage'
// import MessageBox from '@/components/MessageBox'
// import { delay } from './utils';
import getApiConfig from './callserver';

/**
 * 将对象参数转化为URL参数
 * @param  {object} params 参数对象
 * @return {string}        URL参数字符串
 */
export const genUrlParams = (params = {}) => {
    const url = Object.keys(params).filter(key => params[key]).map((key) => {
        const val = params[key];
        let encodeUrl = '';
        if (Object.prototype.toString.call(val).indexOf('String') !== -1) {
            encodeUrl = `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        } else {
            encodeUrl = `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(val))}`;
        }
        return encodeUrl;
    }).join('&');
    return url;
};

/**
 * 将对象参数转化为POST参数
 * @param  {string} type   数据格式('json'/'form')
 * @param  {object} params 参数对象
 * @return {string|object} 参数字符串或FormData对象
 */
export const genPostParams = (type, params = {}) => {
    if (type === 'JSON') return JSON.stringify(params);
    if (type === 'FORM') {
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        Object.keys(params).forEach((key) => {
            formData.append(key, params[key]);
        });
        return formData;
    }
    return genUrlParams(params);
};

/**
 * 组装 fetch 函数的调用参数
 * @param  {[type]} api    [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getContentType = (type) => {
    let contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
    if (type === 'JSON') contentType = 'application/json;charset=UTF-8';
    if (type === 'FORM') contentType = '';
    return contentType ? { 'Content-Type': contentType } : {};
};

/**
 * 解析 url 中的参数
 * @param {string} url  在 callserver 中填写的接口地址
 * @param {object} params  从 params 中解析出 restUrl 中所需的参数
 */
export const parseRestUrl = (_url, _params = {}) => {
    const urlKeys = [];
    // 正则匹配并替换的参数
    const restUrl = _url.replace(/[:]{1}[^/.]*/ig, (item) => {
        const key = item.substr(1);
        if (!key || !_params[key]) throw new Error(`${item} is not defined`);

        urlKeys.push(key);
        return _params[key];
    });

    // 过滤掉 restUrl 总匹配的参数
    const restParams = Object.keys(_params)
        .filter(key => urlKeys.indexOf(key) === -1)
        .reduce((ret, key) => {
            const $ret = ret;
            $ret[key] = _params[key];
            return $ret;
        }, {});

    const hasParams = JSON.stringify(restParams) === '{}' ? 0 : restParams;
    return { restUrl, restParams, hasParams };
};

/**
 * 组装 fetch 函数的调用参数
 * @param  {[type]} api    [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const genFetchArguments = (api, params) => {
    const { url, options: { method, type, credentials } } = getApiConfig(api);
    // const { restUrl, restParams, hasParams } = parseRestUrl(url, params);
    const $method = method.toUpperCase();
    const $type = type.toUpperCase();
    const $url = $method === 'GET' ? `${url}?${genUrlParams(params)}` : url
    // const $url = $method === 'GET' && hasParams ? `${restUrl}?${genUrlParams(restParams)}` : restUrl;
    const headers = { ...getContentType($type) };
    const body = $method !== 'GET' ? { body: genPostParams($type, params) } : {};
    return { url: $url, method: $method, headers, credentials, ...body };
};

/**
 * 解析后台响应是否正常
 * @param  {Object} rsp 响应
 * @return {Object} { success:Boolean, code:String, msg:String }
 */
export const parseResponseJson = (json) => {
    // 2211108001 用户未登录
    // 2211108006 请重新登录
    if (json.code === '2211108001' || json.code === '2211108006') {
        // authorization
        wx.authorization()
    }
    const success = json.success === undefined ? json.code === '000' : json.success;
    const code = json.code;
    const msg = json.msg || json.message;
    return { success, code, msg };
};

/**
 * 接口请求通道锁
 */
// eslint-disable-next-line
export const channelUtils = (function () {
    let $choked = [];
    return {
        lock: (name, fn) => {
            const channel = $choked.find(ch => ch.name === name);
            if (channel) return channel.content;
            const content = fn();
            $choked.push({ name, content });
            return content;
        },
        unlock: (name) => {
            $choked = $choked.filter(ch => ch.name !== name);
        },
    };
})();

/**
 * 封装的 fetch 方法
 * !!This method can only be called on client side!!
 *
 * @param  {String}   api     API name, should be defined in './callserver.jsx'.
 * @param  {Object}   params  Request parameters.
 * @param  {Any}      cache   Use local cache without a remote request.
 * @param  {Object}   options See as follows.
 * @return {Promise}
 */

// eslint-disable-next-line
const appendGroupID = (curUrl, api) => {
    const options = {
        groupID: localStorage.get('groupID'),
    }

    const query = genUrlParams(options)
    const hasQuery = /\?/.test(curUrl)

    // eslint-disable-next-line prefer-const
    let url = hasQuery ? `${curUrl}&${query}` : `${curUrl}?${query}`
    // if (api === 'getShopByQRCode' || api === 'getshoppingCartPre') {
    //     url = `${url}&openID=oACwGszJiNSdIoUd8R6jk1yM2TiU`
    // }

    return `${url}`
}

export const fetchData = (api, params, cache, {
    _delay = 0, // delay for cached data
    path = '', // path for response
    throttle = 500, // wait time for frequent ajax request; pass false to turn off
    disablePrompt = false,
} = {}) => {
    const channel = `${api}_${JSON.stringify(params)}`;
    const actionFn = () => new Promise((resolve, reject) => {
        // use cache
        if (cache !== undefined && cache !== null) {
            delay(() => {
                resolve(cache);
                channelUtils.unlock(channel);
            }, _delay);
        } else {
            const { url, ...options } = genFetchArguments(api, params);
            const finalUrl = appendGroupID(url, api)
            fetch(finalUrl, options).then((response) => {
                // unlock channel
                delay(channelUtils.unlock, throttle, channel);

                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;

                    MessageBox.alert(JSON.stringify(error), 'title');
                    throw error;
                }
                // eslint-disable-next-line
            }).then((json) => {
                const { success, code, msg } = parseResponseJson(json);
                if (!success) {
                    if (code !== '2211108001' && code !== '2211108006') {
                        if (!disablePrompt) {
                            MessageBox.alert(msg, '提示');
                        } else {
                            reject({ code, msg, response: json })
                        }
                    } else {
                        // 未登录情况下 组织之后代码执行
                        return false
                    }
                }

                if (!path) {
                    resolve(json);
                } else {
                    const paths = path.split('.');
                    const data = paths.reduce((ret, item) => {
                        if (!ret) return ret;
                        return ret[item];
                    }, json);
                    resolve(data);
                }
            }).catch((error) => {
                reject(error);
            });
        }
    });

    if (throttle === false) return actionFn();
    return channelUtils.lock(channel, actionFn);
};

export default fetchData;
