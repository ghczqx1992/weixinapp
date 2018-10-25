//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    ranks: [
      {
        type: 26, text: "热歌"
      },
      {
        type: 23, text: "销量"
      },
      {
        type: 18, text: "民谣"
      },
      {
        type: 19, text: "摇滚"
      },
      {
        type: 5, text: "内地"
      },
      {
        type: 6, text: "港台"
      },
      {
        type: 16, text: "韩国"
      },
      {
        type: 17, text: "日本"
      },
      {
        type: 3, text: "欧美"
      },
      {
        type: 28, text: "网络歌曲"
      }
    ]
  }
  ,
  go_to_site_list(event) {
    app.globalData.community_id_for_switch_tab = event.currentTarget.dataset.cid;
    wx.switchTab({
      url: '/pages/list/list',
    })
  }
})
