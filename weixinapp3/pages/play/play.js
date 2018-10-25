// pages/play/play.js
const app = getApp();
const backgroundAudioManager = wx.getBackgroundAudioManager();
const innerAudioContext = wx.createInnerAudioContext();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: {},
    isPlaying: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var songid = app.globalData.songid;
    if (songid == undefined) {
      var curSong = wx.getStorageSync('curSong') || {};
      if (curSong == undefined) {
        var song = { songname: '未选择歌曲' };
        this.setData({
          song: song
        })
      } else {
        this.setData({
          song: curSong
        })
      }
    } else {
      var songlist = wx.getStorageSync('songlist') || [];
      for (var i = 0; i < songlist.length; i++) {
        if (songid == songlist[i].songid) {
          this.setData({
            song: songlist[i]
          });
          break;
        }
      }
    }
    wx.setStorageSync('curSong', this.data.song);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  playToogle: function () {
    
    var self = this;
    if (this.data.song.songname == '未选择歌曲') {
      return;
    }
    if (this.data.isPlaying) {
      wx.stopBackgroundAudio();
    }else{
     wx.playBackgroundAudio({
       dataUrl: this.data.song.url || this.data.song.m4a,
       success:function(res){

       }
     })
    }
    this.setData({
      isPlaying:!this.data.isPlaying
    });

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