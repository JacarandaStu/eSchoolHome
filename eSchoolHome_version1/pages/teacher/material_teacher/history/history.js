var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      record:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.request({
        data:{
          "userType":app.globalData.userType,
        },
        dataType:"json",
        url: 'http://127.0.0.1:5000/history',
        method: "POST",
        timeout: 0,
        success: (result) => {
          var that = this;
          that.setData({
            record : result.data.records,
          });
          console.log(result);
          console.log(result.data);
        },
        fail: (res) => {
          console.log("fail to connected!");
        }
      })
    },
    go: function (e) {
      app.globalData.task_id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/teacher/material_teacher/history/detail/task1'
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})