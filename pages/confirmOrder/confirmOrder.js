//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  
  onLoad: function () {
  },
  intoPath(e) {
    const self = this;
    api.pathTo(api.getDataSet(e, 'path'), 'nav');
  },
})
