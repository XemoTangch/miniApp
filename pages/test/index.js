// pages/test/index.js
Page({
  clickMe: function(){
    this.setData({ msg: '点点点点点点' });
  },
  getData: function(e){
    wx.request({
      url: 'http://apitest.imhaiguiapp.com/api/circle/NearbyList', //仅为示例，并非真实的接口地址
      data: {
        uid: '28117',
        latitude: '22.549134',
        longitude: '113.943874',
        page: '1',
        size: '10',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.info('success');
        console.log(res.data)
      },
      fail: function (res) {
        console.info('fail');
        console.log(res);
      },
      complete: function (res) {
        console.info('complete');
      }
    });


  },

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'wowowowowowowo'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})