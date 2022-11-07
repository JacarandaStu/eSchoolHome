// pages/material/material_teacher/history/history.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      record:[{
          id:"1",
          timestamp:"发布时间：2022.10.16 13:00",
          title:"任务标题：20级个人编程作业",
          ddl:"距离截止时间还剩：1天5小时"
      },
      {   
          id:"2",
          timestamp:"20221020090000",
          title:"20级结队编程作业",
          ddl:"3/7"
      },
      {
          id:"3",  
          timestamp:"20221024140000",
          title:"20级团队编程作业",
          ddl:"5/7"
      },
      {
          id:"4",
          timestamp:"20221001060000",
          title:"20级个人博客作业",
          ddl:"0/0"
      }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    go: function (res) {
      wx.navigateTo({
        url: '/pages/material/material_teacher/history/detail/task1'
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