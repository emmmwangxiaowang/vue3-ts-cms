<template>
  <xw-form v-bind="searchFormConfig" v-model="formData">
    <template #header>
      <h1>高级检索</h1>
    </template>
    <template #footer>
      <div class="handleBtns">
        <el-button type="primary" icon="RefreshRight">重置</el-button>

        <el-button type="primary" icon="Search">搜索</el-button>
      </div>

    </template>
  </xw-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XwForm from '@/base-ui/form'

export default defineComponent({
  props:{
    searchFormConfig:{
      type:Object,
      required:true
    }
  },
  components:{
    XwForm
  },
  setup () {

    const formData=ref({
      name:'',
      password:'',
      sport:'',
      createTime:''
    })

    return {
      formData
    }
  }
})
</script>

<style scoped>
  .handleBtns {
    width: 100%;
    text-align: right;
    padding: 0 50px 20px 0;
  }
</style>
