<template>
    <div>
        <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
    </div>

</template>

<script>
export default {
  data(){
    return{
      value6:''
    }
  }
};
</script>

<style lang="scss" scoped>

</style>