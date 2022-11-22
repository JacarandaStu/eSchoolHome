// pages/DaKaYiChang/DaKaYiChang.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      messageList:[
        {id:"1",name:"张三",s_id:"102002103",abnormal:"发热、接触中..."},
        {id:"2",name:"李四",s_id:"102002103",abnormal:"发热、接触中..."},
        {id:"3",name:"王五",s_id:"102002103",abnormal:"发热、接触中..."},
        {id:"4",name:"某某某",s_id:"102002103",abnormal:"发热、接触中..."}
      ]
    },
    goToWeiDaKa:function(){
      wx.redirectTo({
        url: '../weiDaKa/weiDaKa',
      })
    },
    goToYiDaKa:function(){
      wx.redirectTo({
        url: '../yiDaKa/yiDaKa',
      })
    },
    goToAbnormalMessage:function(e){
      var $id = e.$id;
      console.log($id)
      wx.navigateTo({
        url: '../abnormalMessage/abnormalMessage',
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