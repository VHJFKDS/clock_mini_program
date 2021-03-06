const {http} = require('../../lib/http.js')

Page({
  updateId:'',
  updateIndex:'',
  data: {
    lists:[],
    visibleCreateConfirm:false,
    visibleUpdateConfirm:false,
    updateContent:""
  },
  onShow(){
   http.get('/todos?completed=false').then(response=>{
     this.setData({lists:response.data.resources})
   })
  },
 confirmCreate(event){
  let content = event.detail
  console.log(content)
  if(content){
  http.post('/todos',{
      completed:false,description:content  //event.detail 
  })
  .then(response=>{
   let todo = [response.data.resource]
   this.data.lists = todo.concat(this.data.lists)
    this.setData({lists:this.data.lists})
    this.hideCreateConfirm()
  })
  }
 },

 changeText(event){
   let {content,id,index} = event.currentTarget.dataset
   this.updateId = id
   this.updateIndex = index
   this.setData({visibleUpdateConfirm:true,updateContent:content})
 },
 confirmUpdate(event){
  let content = event.detail
  console.log(content)
  http.put(`/todos/${this.updateId}`,{
    description:content
  }).then(response =>{
    let todo = response.data.resource
     this.data.lists[this.updateIndex] = todo
     this.setData({lists:this.data.lists})
     this.hideUpdateConfirm()
  })
 },
 destroyTodo(event){
   let index = event.currentTarget.dataset.index
   let id = event.currentTarget.dataset.id
   http.put(`/todos/${id}`,{
     completed:true
   }).then(response=>{
     let todo = response.data.resource
     this.data.lists[index] = todo
     this.setData({lists:this.data.lists})
   })
 },
 hideCreateConfirm(){
   this.setData({visibleCreateConfirm:false})
 },
 showCreateConfirm(){
   this.setData({visibleCreateConfirm:true})
 },
 hideUpdateConfirm(){
   this.setData({visibleUpdateConfirm:false})
 }
})