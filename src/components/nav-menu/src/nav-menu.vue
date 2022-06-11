<template>
  <div class="nav-menu">
    <div class="logo">
      <!-- 在页面中使用 引用 需要 ~ 前缀 -->
      <img class="img" src="~@/assets/img/logo.svg" alt="logo">
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
        background-color="#001529"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="cyan"
        :collapse="collapse"
        >

        <el-sub-menu index="1" v-if="findMenu(3)">
          <template #title>
            <el-icon>
              <img src="~@/assets/img/auth.svg" alt="">
            </el-icon>
            <span class="menuName" v-if="!collapse">权限管理</span>
          </template>
            <template v-for="item in dataMenus(3)" :key="item.id">
              <el-menu-item :index="item.id + ''" @click="handleMenuItemClick(item)">
                  <span class="itemSpan">{{ item.menuName }}</span>
              </el-menu-item>
            </template>
        </el-sub-menu>

        <el-sub-menu index="2" v-if="findMenu(2)">
          <template #title >
            <el-icon>
              <img src="~@/assets/img/system.svg" alt="">
            </el-icon>
            <span class="menuName" v-if="!collapse">数据管理</span>
          </template>
          <template v-for="item in dataMenus(2)" :key="item.id">
            <el-menu-item :index="item.id + ''" @click="handleMenuItemClick(item)">
                <span class="itemSpan">{{ item.menuName }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>




      </el-menu>
  </div>
</template>

<script lang="ts">

import { useStore } from '../../../store/index'
import { defineComponent,computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({

  props:{
    collapse:{
      type:Boolean,
      default:false
    }
  },

  setup () {


    const store=useStore()
    const userMenus=computed(()=>store.state.login.userMenus)


    const findMenu=(id:number):boolean=>{
      return userMenus.value.some(item=>{
        return item.id===id
      })
    }

    const dataMenus=(id:number)=>{
      return userMenus.value.filter((item)=>{
        return item.parentMenuId===id
      })
    }

    const router=useRouter()

    const handleMenuItemClick=(item:any)=>{
      router.push({
        path:item.url ?? '/not-found'
      })

    }


    return {
      userMenus,
      findMenu,
      dataMenus,
      handleMenuItemClick,
      router
    }
  }
})
</script>

<style scoped lang="less">

.menuName{
  margin-left: 10px;
}

.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin-left: 10px;
      padding-left: 0px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;

    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
      margin-left: 10px;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
