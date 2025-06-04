window.config = {
  // 环境不同，替换#之前的域名,跳转到测绘的域名
  TH_URL: 'http://172.34.120.60:11103/#/',
  // WEBSOCKET_URL: "http://172.34.120.88:49858",
  WEBSOCKET_URL: "http://172.34.120.88:49859",
  WEBSOCKET_V2_URL: "http://172.34.120.93:54836",
  // WEBSOCKET_FLOW_URL: "http://172.34.120.88:54839",
  // WEBSOCKET_FLOW_URL: "http://172.34.120.88:54846",
  WEBSOCKET_FLOW_URL: "http://172.34.120.93:54846",
  WEBSOCKET_SUBCRIBE_URL: "http://172.34.120.93:55611",
  // WEBSOCKET_URL: "http://172.34.120.87:54835",
  MAP_DATA: {
    // 前端访问地图服务的地址
    url: 'http://172.34.120.93',
    port: '42491',
    // 前端访问卫星地图服务的地址
    wxMapUrl: 'http://172.34.120.93',
    wxMapPort: '33491',
  },
  manage: 'http://172.34.120.88:30154/#/',
  knowledgeBaseUrl: 'http://172.34.120.93:37453/#/',
  // 仁爱礁事件脉络
  renaiUrl: 'http://172.34.120.88:38356/#/eventContent?dataName=%E4%BB%81%E7%88%B1%E7%A4%81',
  // 嘉手纳事件脉络
  jiashounaUrl: 'http://172.34.120.88:38356/#/eventContent?dataName=%E5%98%89%E6%89%8B%E7%BA%B3',
  // 蓝图id
  graphId: '669f5130e4b0cba671d769cb',
  pluginList: [
    // "6729fd55e4b0a708d2242dd5",
    // "6729fd55e4b0a708d2242dd4",
    // "6729fd55e4b0a708d2242dd3",
    // "6729fd54e4b0a708d2242dd2",
    // "6729fd54e4b0a708d2242dd1",
    // "6729fd54e4b0a708d2242dd0",
    "67343d11e4b0cdf2083645e2",
    "67343d11e4b0cdf2083645e1",
    "67343d11e4b0cdf2083645e0",
    "67343d11e4b0cdf2083645df",
    "67343d11e4b0cdf2083645de",
    "67343d11e4b0cdf2083645dd",
    "67343d11e4b0cdf2083645dc"
  ],
  llm_config: "{\"id\":\"66d01601e4b095a9cf44632e\",\"name\":\"transwarp-InfinityQ2.5\",\"base_url\":\"http://172.34.120.89:58014/v1\",\"description\":\"无涯大模型\",\"api_key\":\"\",\"continuous_resp\":false}",
  task: {
    llm_config: "{\"id\":\"677df862e4b012c0f51cfc12\",\"name\":\"QwQ-32B-AWQ\",\"base_url\":\"http://172.34.120.89:59710/v1\",\"description\":\"\",\"api_key\":\"\",\"continuous_resp\":false}",
    pluginList: ['k67613b03e4b03cb3bc184f77']
  }
}
