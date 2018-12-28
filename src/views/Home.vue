<template>
    <div class="home">
          <el-container>

      <el-aside width="auto">
        <div class="logo">lalala</div>
       <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              :router='true'
              active-text-color="#ffd04b">
              <el-submenu index="center/">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设计中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="first">素材列表</el-menu-item>
                  <el-menu-item index="second">市场专用</el-menu-item>
                  <el-menu-item index="third">素材筛选</el-menu-item>
                  <el-menu-item index="fourth">游戏透视</el-menu-item>
                  <el-menu-item index="fifth">游戏包装</el-menu-item>
                  <el-menu-item index="sixth">个人中心</el-menu-item>
                  <el-menu-item index="temp">测试</el-menu-item>
                </el-menu-item-group>
               
              </el-submenu>
              <el-menu-item index="base">
                <i class="el-icon-menu"></i>
                <span slot="title">基础管理</span>
              </el-menu-item>
              <el-menu-item index="loadpage" >
                <i class="el-icon-document"></i>
                <span slot="title">落地页效果</span>
              </el-menu-item>
              <el-menu-item index="game">
                <i class="el-icon-setting"></i>
                <span slot="title">广告效果</span>
              </el-menu-item>
            </el-menu>
          </el-col>
      </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <span class="toggle-btn myicon myicon-menu" ></span>
          <span class="system-title">NBL 加油鸭</span>
          <div>
            <span class="welcome">肥柴 :你好</span>
            <el-button type="text" >退出</el-button>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style lang='scss' >
*{
  margin: 0;
  padding: 0;
}
.home {
  .el-menu{
    border: none!important;
    background-color: none!important;
  }
  height: 1000px;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 1000px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    line-height: 60px;
    text-align: center;
    //background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
</style>