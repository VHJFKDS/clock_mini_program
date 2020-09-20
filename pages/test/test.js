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
str:"我是一条信息",
arr:[1,2,3,4],
obj:{id:1,text:"我是信息1"},
xx:false
  },

  
  onLoad: function (options) {

  },
  changeColor(){
   this.setData({xx: !this.data.xx})
  },
  changeObjText(){
  //  this.obj.text="我是信息2"
  //  this.setData({obj:this.obj})   这么做不行，不能修改text
  this.setData({"obj.text":"我是信息2"})  //想要改变某个key里面的值就得这样写
  },
  pushItem(){
    //小程序基本不能用push方法,但下面方法相当于push
    let last = this.data.arr[this.data.arr.length-1]+1
    let newArr = [last]
    this.data.arr = newArr.concat(this.data.arr)
    this.setData({arr: this.data.arr})
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