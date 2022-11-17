// pages/weiDaKa/weiDaKa.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      hidden:true
      // array1:[['某某同学','102002103'],'某某同学','某某同学']

    },
    //点击后触发，1s后关闭
    remind:function(e){
        this.setData({
          hidden:false
        })
      setTimeout(()=>{
        this.setData({
          hidden:true
        })
       }, 1000)
    },
    
    goToDaKaYiChang:function(){
      wx.redirectTo({
        url: '../DaKaYiChang/DaKaYiChang',
      })
    },
    goToYiDaKa:function(){
      wx.redirectTo({
        url: '../yiDaKa/yiDaKa',
      })
    },
    

   

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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