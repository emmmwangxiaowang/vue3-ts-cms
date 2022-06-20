<template>
  <div class="main">
     <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-menu :collapse="isCollapse"/>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFOldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent ,onMounted,ref } from 'vue'
import navMenu from '../../components/nav-menu/src/nav-menu.vue'
import navHeader from '../../components/nav-header/src/nav-header.vue'

export default defineComponent({
  components: { navMenu ,navHeader},
  setup () {

    const isCollapse=ref(false)


    // onMounted(() => {

    // // 仅在整个视图都被重新渲染完毕之后才会运行的代码
    // store.dispatch(('login/loadLocalLogin'))

    // })
    const handleFOldChange=(isFold:boolean)=>{
      isCollapse.value=isFold
    }

    return {
      // onMounted,
      handleFOldChange,
      isCollapse,
    }
  }
})
</script>

<style scoped lang="less">

.main{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,.page{
  height: 100%;
}

.page-content{
  height: calc(100%-48px);
  background-color: aliceblue;

  .page-info {
    background: #fff;
    border-radius: 5px;
  }
}

.el-header,.el-footer{
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header{
  height: 48px !important;
}

.el-aside{
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar{
    display: none;
  }
}

.el-min{
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}



</style>
