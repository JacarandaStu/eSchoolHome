// pages/my/me-info/me-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToOrders:function(){
  wx.navigateTo({
    url: 'pages/login/pages/teacher/my/orders/orders',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
this.getUserInfo()
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

  },
  getUserInfo: function (res) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        wx.setStorageSync('nickName', res.userInfo.nickName);
        wx.setStorageSync('avatar', res.userInfo.avatarUrl)
        that.setData({
          avatar: wx.getStorageSync('avatar'),
          nickName: wx.getStorageSync('nickName')
        })
      }
    })
  },
})