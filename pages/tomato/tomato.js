// pages/tomato/tomato.js
Page({
  timer:null,
  data: {
   defalutSecond:1500,
   time:"",
   timerStatus:'stop',
   confirmVisible:false
  },
  onShow: function () {
   this.startTimer()
  },
  startTimer(){
    this.setData({timerStatus:'start'})
    this.timer = setInterval(() => {
      if(this.data.defalutSecond === 0){
       return this.clearTimer()
      }
      this.data.defalutSecond = this.data.defalutSecond -1
      this.changeTime()

    },1000 );
  },
  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
    this.setData({timerStatus:'stop'})
  },
changeTime(){
 let m = Math.floor(this.data.defalutSecond/60)
 let s = Math.floor(this.data.defalutSecond%60)
 if(s === 0){
   s = "00"
 }
 if((s+"").length === 1){
   s = "0"+s
 }
 if((m+"").length === 1){
  m = "0"+m
}
this.setData({time:`${m}:${s}`})
},
abandon(){

},
hideConfirm(){

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

  
})