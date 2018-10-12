//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
const api = new Api();

Page({
  data: {
    region: ['陕西省', '西安市', '雁塔区'],
  },
  onLoad: function (options) {
    
    },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})

