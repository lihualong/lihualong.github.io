var testdata = {
  data: [{
    iconType: 'app',//图标类型
    iconColor: 'normal',
    name: 'monitor-client',//节点名称
    extra: ['1233ms(25%)', '1call', '2error'],//节点右侧文本
    text: '1/6',//节点中心文字
    tip: 'java',//节点上的圆形code文字
    value: null,//其他数据,点击节点会回传
    drilldown: false//可下钻
  }, {
    iconType: 'app',//图标类型
    iconColor: 'slow',
    name: 'monitor-web-server',//节点名称
    extra: ['1233ms(25%)', '1call', '2error'],//节点右侧文本
    text: '1/6',//节点中心文字
    tip: 'java',//节点上的圆形code文字
    value: null,//其他数据,点击节点会回传
    drilldown: true//可下钻
  },
  {
    iconType: 'database',//图标类型
    name: 'monitor-sqlserver',//节点名称
    value: null//其他数据,点击节点会回传
  },
  {
    iconType: 'cloud',//图标类型
    name: 'monitor-redis',//节点名称
    value: null//其他数据,点击节点会回传
  },
  ],
  edges: [
    {
      source: 0,
      target: 1,
      texts: ['111,111,111', 'http'],
      value: null//其他数据,点击节点会回传
    }, {
      source: 1,
      target: 2,
      texts: ['111,111,111', 'http'],
      value: null//其他数据,点击节点会回传
    }
    , {
      source: 1,
      target: 3,
      texts: ['111,111,111', 'http'],
      value: null//其他数据,点击节点会回传
    },

  ]
}