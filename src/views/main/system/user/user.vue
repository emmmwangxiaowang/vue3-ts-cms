<template>
  <div class="user">
    <div class="search">
      <xw-form v-bind="searchFormConfig"/>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XwForm from '@/base-ui/form/index'

import { searchFormConfig }  from './config/search.config'


export default defineComponent({
  name: 'user',
  components:{
    XwForm
  },
  setup() {




    return {
      searchFormConfig

    }
  }
})
</script>

<style scoped>
  .xw-form{
    padding-top: 22px
  }
</style>
