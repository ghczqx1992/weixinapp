// pages/list/list.js
var config = require('../../config.js');

var formatSeconds = function (value) {
  var time = parseFloat(value);
  var h = Math.floor(time / 3600);
  var m = Math.floor((time - time / 3600) / 60);
  var s = time - h * 3600 - m * 60;
  return [h, m, s].map(formatNumber).join(':');
  function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
}

const app = getApp();
Page({

  /**
   * 页面的初始数据dsdsda
   */
  data: {
    board: '',
    songlist: [],
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var topid = app.globalData.community_id_for_switch_tab;
    var url = config.config.hotUrl + "&topid=" + topid;
    this.setData({
      loading: true
    });
    wx.request({
      url: url,
      data: { topid: topid },
      success: function (e) {
        if (e.statusCode == 200) {
          var songlist = e.data.showapi_res_body.pagebean.songlist;
          //将时长转化为秒
          for (var i = 0; i < songlist.length; i++) {
            songlist[i].seconds = formatSeconds(songlist[i].seconds);
          }
          self.setData({
            board: e.data.showapi_res_body.pagebean.songlist[0].albumpic_big,
            songlist: songlist,
            loading:false
          });
          wx.setStorageSync('songlist', songlist);
        }
      }
    })
  },
  go_to_site_play(event) {
    app.globalData.songid = event.currentTarget.dataset.cid;
    wx.switchTab({
      url: '/pages/play/play',
      success: function () {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      } 
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})