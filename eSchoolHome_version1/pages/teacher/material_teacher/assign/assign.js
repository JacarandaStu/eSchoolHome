var app = getApp();
var util = require("../../../../util/util");
Page({
    data: {
      Type:"",
      ddlTime:"",
      remindTime:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
      // 获取当天时间
      var that = this;
      var time = util.formatTime(new Date()).substring(0, 16);
      console.log(time);
      that.setData({
        date_head: time.substring(0, 10),
        date_tail: time.substring(11, 16),
      });
    },
    changeDate(e) {
      this.setData({
        date_head: e.detail.value,
      });
    },
    changeTime(e) {
      this.setData({
        date_tail: e.detail.value,
      });
    },
    bindShowMsg(e) {
      var opt = e.currentTarget.dataset.id
      if(opt == 1){
        this.setData({
          select:!this.data.select
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
        } else {
          this.setData({
            remindTime: name,
            select2: false
        })
        }
    },
    // 发布任务，与后端交互
    myAssign:function(datas){
        var title = datas.detail.value.name;
        var endTime = datas.detail.value.endTime1 + datas.detail.value.endTime2;
        var content = datas.detail.value.content;

        console.log(datas.detail.value);
        wx.request({
          url: 'http://127.0.0.1:5000/assign',
          data: {
            "classID":app.globalData.class_id,
            "title":title,
            "info":content,
            "fileType":this.data.Type,
            "ddl":endTime,
            "remind":this.data.remindTime
          },
          header: {
            'content-type': 'application/json'
          },
          dataType:"json",
          method: 'POST',
          timeout: 0,
          success: (result) => {
            console.log("Yeahhhhh!");
            wx.navigateTo({
              url: './OK',
            })
          },
          fail: (res) => {
            console.log("Fuckkkkk!");
            wx.navigateTo({
              url: './OK',
            })
          },
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