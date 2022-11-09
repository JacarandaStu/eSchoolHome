// pages/material/material_patriarch/push/push.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        task_info:[{
            title:"结队编程作业",
            info:"啊八八八八",
            type:"md",
        }]
    },
    onUpload(){
        let that =this;
        let headers = {
             'Content-Type': "multipart/form-data"
        };
        wx.chooseMessageFile({
                success: function (res) {				       					
                that.tempFilePaths = res.tempFiles[0].path
                that.filename = res.tempFiles[0].name
             },				
        });			
    },
    submitUpload(){
        uni.uploadFile({
        url: '',//这里的url是你项目文件上传的接口
        filePath: this.tempFilePaths,//这是你上传文件到微信暂存区的 路径
        name: 'file',
           //这里也是为小程序在真机测试校验协议时能够被通过，
           //你可以直接在 data里面定义这个变量，上面那个方法里面的headers可以不定义。
           header:{
              ...headers
           },
           //这个是上传文件 需要的参数，具体看你们项目接口需要提交的参数
           formData: {
               file_mis_id:this.contractList.mis_id,
               file_name:this.filename
           },
           success (res){
                const data = res.data
                if(res.statusCode==200){
                   uni.showToast({
                       title: '上传成功', 
                       icon: "success"
                   })						 
                }else{
                    uni.showToast({
                       title: '上传失败', 
                        icon: "none"
                    })
                }
           }
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