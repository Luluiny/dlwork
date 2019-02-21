<template>
  <div id="content">
    <input type="button" value="編輯" @click="tem_edilt">
    <input type="button" value="保存" @click="tem_hold">
    <input type="button" value="預覽" @click="tem_pre">
    <div style="display:inline-block;">
      <span>添加模块</span>
      <!-- <input type="select" v-model="addtem"  @blur="tem_tem" style="width:100px;border:1px solid #eee;"> -->
      <select name id v-model="addtem" @blur="tem_tem" style="width:100px;border:1px solid #eee;">
        <option value="表格">表格</option>
        <option value="选择框">选择框</option>
        <option value="日期控件">日期控件</option>
      </select>
    </div>

    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      @layout-updated="layoutUpdatedEvent"
    >
      <grid-item
        v-for="item in layout"
        :item="watchitem(item)"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        style="background-color:pink"
        :i="item.i"
        :id="item.id"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
      {{item.id}}
          <!-- <datacomponent v-if="item.display"></datacomponent>
          <selectcomponent v-if="item.display"></selectcomponent> -->
          
      </grid-item>
    </grid-layout>
    <!-- <tablecomponent  style="display:none;" id="table_demo"></tablecomponent> -->
    <div class="component_box" style="display:none;" >
        <tablecomponent id="tablecomponent"  ></tablecomponent>
        <datacomponent id="datacomponent" ></datacomponent>
        <selectcomponent id="selectcomponent" ></selectcomponent>
    </div>
  </div>
</template>
<script src="vue-grid-layout.umd.min.js"></script>
<script>
import Vue from "vue";
import $ from "jquery";
import tablecomponent from "./Second.vue";
import datacomponent from "./Third.vue";
import selectcomponent from "./Fourth.vue";
import VueGridLayout from "vue-grid-layout";
import { test } from "../../../static/js/tesssssst.js";
Vue.use(VueGridLayout);
var testLayout = [
  { x: 0, y: 0, w: 12, h: 7, i: "tablecomponent", id: "表格", display:1},
  { x: 0, y: 0, w: 6, h: 5, i: "selectcomponent", id: "選擇框",display:'' },
  { x: 0, y: 0, w: 6, h: 5, i: "datacomponent", id: "日期控件",display:''}
];
var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;
export default {
  name: "Layout",
  data() {
    return {
      layout: testLayout,
      newX: 0,
      newY: 0,
      template: [], //template里面是
      idata: [], //记得 idata里面存的是每一个模块的i
      addtem: "",
      newLayout: [],
      contentwidth:'',
      table_boo:false,
      select_boo:false,
      data_boo:false,
      idarray:[]
    };
  },
  methods: {
   
    layoutUpdatedEvent: function(newLayout) {
      this.contentwidth=$("#content").width();
      this.newLayout = newLayout;
    },
    tem_pre: function() {
      console.log($("#tablecomponent"),111111111111);
        for (var j = 0; j < this.newLayout.length; j++) {
        this.idata.push(this.newLayout[j].i);
      }
     // console.log("111111",this.idata);
      this.contentwidth=$("#content").width();
       console.log(this.newLayout);
      $(".vue-grid-item").remove();
      $('.component_box').show();
      //在这里按照尺寸位置全部重新渲染
      var single_width=this.contentwidth/12;//宽度除以12之后
      console.log("single_width",single_width);
      for(var i=0;i<this.newLayout.length;i++){
        var tempjson={};
            tempjson.width=this.newLayout[i].w*single_width;
            tempjson.height=this.newLayout[i].h*single_width;
            tempjson.x=this.newLayout[i].x*single_width;
            tempjson.y=this.newLayout[i].y*single_width;
            tempjson.id=this.newLayout[i].i;
        this.idarray.push(tempjson)
      }
        console.log(this.idarray)
    },
    tem_hold: function() {},
    tem_edilt: function() {},
    tem_tem: function() {
      //增加一个模板
      testLayout.push({ x: 0, y: 0, w: 12, h: 5, i: this.addtem, id: "6" });
      console.log("testLayout", testLayout);
    },
    watchitem: function(item) {
      if (item.y > 1000 || item.x > 1200) {
        item.y = y;
        item.x = x;
      }
      return item;
    }, 
    moveEvent: function(i, newX, newY, e) {
      //开始移动
      // console.log(this)
      //console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
    resizeEvent: function(i, newH, newW) {
      //开始拖拽
    },
    movedEvent: function(i, newX, newY, e) {
      $("body").on("dblclick", ".vue-grid-item", function() {
        $(this).remove();
      });
      //移动结束
      this.template.push(i);
    },
    resizedEvent: function(i, newH, newW, newHPx, newWPx) {
      this.template.push(i);
    }
  },
  watch:{
    contentWidth:function(){
   
    }
  },
  components: {
    GridLayout,
    GridItem,
    tablecomponent,
    datacomponent,
    selectcomponent,
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
}
.conponment {
  font-size: 25px;
  border: 1px solid transparent;
  margin-bottom: 40px;
}
li {
  list-style: none;
  margin-right: 15px;
  float: left;
}
a {
  color: #000;
}
</style>