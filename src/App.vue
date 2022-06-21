<template>
  <div class="main">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import zhCn from 'element-plus/es/locale/lang/zh-cn'
export default defineComponent({
  name: "App",
  setup(){
    return {
      zhCn
    }
  }
});
</script>

<style lang="less">
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.el-main{
  //  x 轴 hidden y 轴 有
  overflow: hidden auto !important;
}

</style>
