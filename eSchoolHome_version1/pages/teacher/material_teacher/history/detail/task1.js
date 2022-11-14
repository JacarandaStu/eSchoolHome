var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      finish: [],
      unfinish: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.request({
        url: 'http://127.0.0.1:5000/taskIndex?taskID='+app.globalData.task_id,
        method: 'GET',
        timeout: 0,
        success: (result) => {
          console.log(result.data);
          var that = this;
          that.setData({
            finish:result.data.fin,
            unfinish:result.data.unfin
          });
        },
        fail: (res) => {
          console.log("error");
        },
        complete: (res) => {},
      })
    },
    go1:function() {
      app.globalData.task_submit = this.data.finish;
      wx.navigateTo({
        url: '../../check/check',
      })
    },
    go2:function() {
      app.globalData.task_urge = this.data.unfinish;
      wx.navigateTo({
        url: '../../urged/urged',
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