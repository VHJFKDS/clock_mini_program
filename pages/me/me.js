// pages/me/me.js
Page({
  data: {
   tab:"tomato",
   lists:{
    "本周四":[
      {time:"14:00",text:"hufdkjsdajsio红富士康",id:1},
      {time:"14:00",text:"hufdkjsdajsio红富士康",id:2}
    ],
    "本周五":[
      {time:"14:00",text:"hufdkjsdajsio红富士康",id:3}
    ],
    "本周六":[
      {time:"14:00",text:"hufdkjsdajsio红富士康",id:4}
    ],
   }
     
   
  },
  onShow: function () {

  },
 changeTab(event){
   let name = event.currentTarget.dataset.name
   this.setData({tab:name})
 }
})