// pages/test/test.js
Page({
  data: {
   message:"第一条信息",
   number:1,
   condition: true,
   arr:[{
     id:1,
     text:1
   },
  {
    id:2,
    text:2
  },
  {
    id:3,
    text:3
  }
],
propValue:1,
str:"我是一条信息"
  },

  
  onLoad: function (options) {

  },
  reverseStr(){
    this.setData({str: this.data.str.split('').reverse().join('')})
  },
  onReady: function () {

  },
  onShow: function () {
    // this.setData(str: 1212112) //this.data.str = 121212这样不行
    
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})