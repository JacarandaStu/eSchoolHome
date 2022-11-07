var util = require('../../../util/util.js');
Page({
  yes: function(options){
    wx.navigateTo({
      url: '../tg/tg', 
    }) },
  no: function(options){
    wx.navigateTo({
      url: '../wtg/wtg', 
    }) },
  // 页面的初始数据
  data: {
    date: '',
    date1: '',
    selected: true,
    selected1: false,
    upload: true,
  },
  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    // 获取当天时间
    var that = this;
    var time = util.formatTime(new Date()).substring(0, 10);
    console.log(time)
    that.setData({
      date: time,
      date1: time,
    });
  },
  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },

  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  // 生命周期函数--监听页面初次渲染完成
  onReady: function() {

  },
  // 生命周期函数--监听页面显示
  onShow: function() {

  },
  // 生命周期函数--监听页面隐藏
  onHide: function() {

  },
  // 生命周期函数--监听页面卸载
  onUnload: function() {

  },
})
