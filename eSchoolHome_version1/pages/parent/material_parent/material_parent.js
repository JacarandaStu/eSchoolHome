// pages/material/material_patriarch.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      icon: [
      {
        id: 1,
        name: "history",
        img: "/images/getFiles.svg",
        text: "历史记录"
      }
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    go:function(res){
      var index = res.currentTarget.id
      if(index == 2){
        wx.navigateTo({
          url: "../material_parent/push/push",
        })
      } else{
        wx.navigateTo({
          url: "../material_parent/history/history",
        })
      }
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