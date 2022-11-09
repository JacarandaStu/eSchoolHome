var app = getApp();
Page({
  data: {
    username: wx.getStorageSync('name'),
    userType: "",
    swiper_img: [
      "/images/home1.png",
    ],
    authorized: false,
    // 
    icon: [{
        id: 1,
        name: "request_leave",
        img: "/images/请假.svg",
        text: "请假管理"
      },
      {
        id: 2,
        name: "sign",
        img: "/images/打卡.svg",
        text: "考勤打卡"
      },
      {
        id: 3,
        name: "material",
        img: "/images/材料.svg",
        text: "文件收集"
      },
    ]
  },

  onLoad: function (options) {
    var that = this;
    app.getOpenid();
    setTimeout(function () {
      //app.findHaveSign();
    }, 500)
  },
  onShow: function (res) {
    var that = this;
    var authorized = wx.getStorageSync('authorized');
    if (authorized) {
      that.setData({
        authorized: true
      })
    }
    if (app.globalData.userType === "teacher") {
      that.setData({
        userType : "老师"
      })
    } else {
      that.setData({
        userType : "家长"
      })
    }
  },
  authorize: function (res) {
    app.authorize();
    setTimeout(() => {
      this.onShow();
    }, 3000);
  },
  // 页面跳转设计
  go: function (res) {
    var index = res.currentTarget.id;
    if (index == 1) {
      if(app.globalData.userType == "teacher"){
        wx.navigateTo({
          url: '../teacher/qj_teacher/approve/approve',
        })
      } else {
        wx.navigateTo({
          url: '../parent/qj_parent/record/record',
      })}
    } else if (index == 2) {
      if(app.globalData.userType == "teacher"){
        wx.navigateTo({
          url: '../teacher/card_teacher/abnormalMessage/abnormalMessage',
        })
      } else {
        wx.navigateTo({
          url: '../parent/card_parent/punch_card/punch_card',
      })}
    } else if (index == 3) {
      if(app.globalData.userType == "teacher"){
      wx.navigateTo({
        url: '../teacher/material_teacher/material_teacher',
      })
    } else {
      wx.navigateTo({
        url: '../parent/material_parent/material_parent',
      })
    }}
  }
})