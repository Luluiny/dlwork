<template>

    <div class="firsthome" @mousedown="dragmousedown()" @mousemove="dragmouseup()">
      <ul class="conponment">
        <li id="vue_table" @click="draggable('vue_table')" ><a href="javascript:;"><span class="el-icon-tickets">表格</span></a></li>
        <li id="vue_data"  @click="draggable('vue_data')"><a href="javascript:;"><span class="el-icon-date">日期控件</span></a></li>
        <li id="vue_select" @click="draggable('vue_select')" ><a href="javascript:;"><span class="el-icon-remove">选择器</span></a></li>
        <li id="vue_img" @click="draggable('vue_img')">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440016527,164210732&fm=27&gp=0.jpg" style="width:60px;height:50px" alt="">
        </li>
      </ul>
      <div id="container" @click="stopdrag()">
        <tablecomponent></tablecomponent>
       <input type="hidden" value="" id="temp_dragid">
      </div>
      
    </div>
</template>

<script>
import $ from 'jquery'
import tablecomponent from './Second.vue'
export default {
  data(){
    return {
     
    }
  },
  computed:{
   
  },
  components:{tablecomponent},
  methods:{
    stopdrag(){},
    draggable(id){
      console.log(this);
      var el=event.currentTarget
      var _this=el;
      $("#temp_dragid").val(_this.id);
    },
    dragmouseup(){
       var e=event||window.event,x=e.screenX,y=e.screenY;
       var id=$('#temp_dragid').val();
       var dragcomponent=document.getElementById(id);
       dragcomponent?dragcomponent.style=`position: absolute;top: `+y+`px;left:`+x+`px;`:'';
       $("#container").append(dragcomponent);
    },
    dragmousedown(){
      //鼠標按下時調用這個方法
      console.log("down");
  //      document.addEventListener("mousedown", function(){
  //         var e=event||window.event,x=e.screenX,y=e.screenY;
  //      var id=$('#temp_dragid').val();
  //      var dragcomponent=document.getElementById(id);
  //      dragcomponent?dragcomponent.style=`position: absolute;top: `+x+`px;left:`+y+`px;`:'';
  //      $("#container").append(dragcomponent);
  //  }, true);
  
      
    },
   
  },
 mounted(){
  //  $('.firsthome').on('mousemove',function(){
  //       var e=event||window.event,x=e.screenX,y=screenY;
  //     console.log("screenX",x);
  //     })
   }
 }
;
</script>
<style lang="scss" scoped>
.conponment{
font-size: 25px;
border: 1px solid transparent;
}
li{
list-style: none;
 margin-right: 15px;
}
a{
 color: #000;
}
#container{
  width: 600px;
  height: 800px;
  border: 1px solid #eee;
  font-size: 25px;
  position: relative;
  top: 0px;
  left: 0px;
}
</style>