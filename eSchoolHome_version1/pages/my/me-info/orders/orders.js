// pages/my/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '父亲',
    showModal: false,
    head:  "../../../../images/touxiang.jpg",
  },
  // 点击更换手机相册或者电脑本地图片   
  headimage: function () {
    var  _this = this;
     wx.chooseImage({
       count: 1, // 默认9     
       sizeType: ['original', 'compressed'],
      // 指定是原图还是压缩图，默认两个都有     
       sourceType: ['album', 'camera'],
      // 指定来源是相册还是相机，默认两个都有   
       success: function (res) {   
         _this.setData({
           head: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
        tihuoWay: name,
        select: false
    })
  },
  // 与后端交互，并跳转回个人页
  save(e) {
    wx.switchTab({
      url: "/pages/my/my",
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  goHome(e) {
    wx.switchTab({
      url: '/pages/home/home',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
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