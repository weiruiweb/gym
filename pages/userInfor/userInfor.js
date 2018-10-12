import {
  Api
} from '../../utils/api.js';
var api = new Api();
const app = getApp();
import {
  Token
} from '../../utils/token.js';
const token = new Token();

Page({
  data: {
    selectId:0,
  },
  gender:function(e){
    var current = e.currentTarget.dataset.id;
    this.setData({
      selectId:current
    })
  },
  onLoad(options) {
  
  },
  
 bindDateChange: function(e) {
    
    this.setData({
      date: e.detail.value
    })
  },
  intoPath(e) {
    const self = this;
    api.pathTo(api.getDataSet(e, 'path'), 'nav');
  },

  intoPathRedi(e) {
    const self = this;
    wx.navigateBack({
      delta: 1
    })
  },

  intoPathRedirect(e) {
    const self = this;
    api.pathTo(api.getDataSet(e, 'path'), 'redi');
  }

})