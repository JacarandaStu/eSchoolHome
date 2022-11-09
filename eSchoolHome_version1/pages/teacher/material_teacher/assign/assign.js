// pages/material/material_teacher/assign/assign.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        somedata:"。。。"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    bindShowMsg(e) {
      var opt = e.currentTarget.dataset.id
      if(opt == 1){
        this.setData({
          select:!this.data.select
        })
      } else if (opt == 2) {
        this.setData({
          select1:!this.data.select1
        })
      } else {
        this.setData({
          select2:!this.data.select2
        })
      }
      
    },
    mySelect(e) {
        var name = e.currentTarget.dataset.name
        var fa = e.currentTarget.dataset.pid
        if(fa == 1){
          this.setData({
            Type: name,
            select: false
        })
        } else if (fa == 2) {
          this.setData({
            ddlTime: name,
            select1: false
        })
        } else {
          this.setData({
            remindTime: name,
            select2: false
        })
        }
    },
    // 发布任务，与后端交互
    assign(e){
        wx.request({
          url: '###',
          data: this.data,
          enableCache: true,
          enableHttp2: true,
          enableQuic: true,
          header: {},
          method: 'POST',
          responseType: 'text',
          timeout: 0,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
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