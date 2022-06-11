<template>
  <div>
    <!-- <el-icon class="nav-header">
      <div class="fold-menu" :class="isFold ? 'el-icon-s-fold':'el-icon-s-unfold'">
        <img src="~@/assets/img/auth.svg" @click="handleFoldClick">emmm
      </div>

    </el-icon> -->

    <el-icon @click="handleFoldClick">
      <div v-if="isFold">
        <ArrowRightBold />
      </div>
      <div v-else>
        <ArrowLeftBold />
      </div>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
export default defineComponent({

  emits:['foldChange'],
  setup (props,{ emit }) {

    const isFold=ref(false)
    const handleFoldClick=()=>{
      isFold.value=!isFold.value
      emit('foldChange',isFold.value)
    }


    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header{
  .fold-menu{
    margin-top: 30px;

    text-align: center;
  }
}
</style>
