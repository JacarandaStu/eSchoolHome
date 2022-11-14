var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"SUN",
    no:"11111",
    commitTime:"2022-11-13 18:00",
    fileType:"img"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://127.0.0.1:5000/commitInfo?commitID='+app.globalData.commit_id+'&taskID='+app.globalData.task_id,
      method: "GET",
      timeout: 0,
      success: (result) => {
        let that = this;
        that.setData({
          name:result.data.name,
          no:result.data.no,
          commitTime:result.data.commitTime,
          fileType:result.data.fileType
        })
      },
      fail: (res) => {},
    })
  },
  yes:function(){
    // 退回待审核页，故要先把全局变量里的该项的状态改为“已通过”
    app.globalData.task_submit[parseInt(this.no)].statu =  "已通过";
    wx.request({
      // 向后端发送提交项更新请求
      url: 'http://127.0.0.1:5000/commitExam?commitID='+app.globalData.commit_id+'&taskID='+app.globalData.task_id,
      timeout: 0,
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  no:function(){
    // 同样是退回审核页，需要把该项移除并加入unfin_ls全局变量中并增添意见项
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