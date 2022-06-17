<template>
  <div class="nav-header">
    <!-- <el-icon class="nav-header">
      <div class="fold-menu" :class="isFold ? 'el-icon-s-fold':'el-icon-s-unfold'">
        <img src="~@/assets/img/auth.svg" @click="handleFoldClick">emmm
      </div>

    </el-icon> -->

    <el-icon @click="handleFoldClick" class="icons">
      <div v-if="isFold">
        <ArrowRightBold />
      </div>
      <div v-else>
        <ArrowLeftBold />
      </div>
    </el-icon>
    <div class="content">
      <xw-breadcrumb :breadcrumbs="breadcrumbs"/>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,ref } from 'vue'

import XwBreadcrumb from '@/base-ui/breadcrumb'

import UserInfo from './user-info.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
export default defineComponent({

  emits:['foldChange'],
  components:{
    UserInfo,
    XwBreadcrumb
  },
  setup (props,{ emit }) {

    const isFold=ref(false)
    const handleFoldClick=()=>{
      isFold.value=!isFold.value
      emit('foldChange',isFold.value)
    }

    // 面包屑的数据:[{name, path}]
    const store=useStore()
    const breadcrumbs=computed(()=>{
      const route=useRoute()
      const userMenus=store.state.login.userMenus
      const currentPath=route.path
      return pathMapBreadcrumbs(userMenus,currentPath)
    })


    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header{
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  .icons {
    margin-top: 4px;
  }

  .fold-menu{
    margin-top: 30px;
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
    align-items: center;

  }
}
</style>
