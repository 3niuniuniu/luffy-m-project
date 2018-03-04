/**
 * 配置接口信息
 * 每一条数组对应一条 api
 * api[0]: 前端调用的接口名称
 * api[1]: 对应的后端接口
 * api[2]: 一个配置对象，可配置请求的请求头。method (请求方法 默认为 'POST'), type (请求的 content-type 默认为 'application/json')
 */

const apiCfg = [
  ['login', '/api/v1/account/login/', { method: 'GET', type: 'json' }],
];

const apiCfgMap = apiCfg.reduce((ret, cfg) => {
  if (!cfg || !cfg[0] || !cfg[1]) return ret;
  // eslint-disable-next-line no-param-reassign
  ret[cfg[0]] = cfg;
  return ret;
}, {});

export default function getApiConfig(apiName) {
  const config = apiCfgMap[apiName];
  if (!config) throw new Error(`getApiConfig: cannot found ${apiName} config`);
  const [
      name,
      url,
      {
          method = 'POST',
          type = 'application/json',
          credentials = 'include', // 在请求中带入 cookie
      } = {},
  ] = config;
  return {
      name,
      url,
      options: { method, type, credentials },
  };
}
