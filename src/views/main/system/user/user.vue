<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'


import { searchFormConfig }  from './config/search.config'



export default defineComponent({
  name: 'user',
  components:{
    PageSearch
  },
  setup() {

    const formData=ref({
      name:'',
      password:'',
      sport:'',
      createTime:''
    })

    return {
      searchFormConfig,
      formData

    }
  }
})
</script>

<style scoped>
  .xw-form {
    padding-top: 5px
  }



</style>
