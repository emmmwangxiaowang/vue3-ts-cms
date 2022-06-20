<template>
  <div class="user">
    <div class="search">

      <page-search :searchFormConfig="searchFormConfig" />

      <div class="content">
        <xw-table :listData="userList" :propList="propList">
          <template #createTime="scope">
            <strong>{{scope.row.createTime}}</strong>
          </template>
        </xw-table>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'


import { searchFormConfig }  from './config/search.config'
import { useStore } from '@/store'

import XwTable from '@/base-ui/table'


export default defineComponent({
  name: 'user',
  components:{
    PageSearch,
    XwTable
  },
  setup() {

    const formData=ref({
      name:'',
      password:'',
      sport:'',
      createTime:''
    })

    const store = useStore()
    store.dispatch('system/getPageListAction',{
      pageUrl:'/employee/user/list',
      queryinfo:{
        offset:0,
        size:10
      }
    })

    const userList=computed(()=>store.state.system.userList)

    const userCount=computed(()=>store.state.system.userCount)

    const propList=[
      {prop:'username',label:'用户名',width:100,slotName:'username'},
      {prop:'email',label:'邮箱',width:250,slotName:'email'},
      {prop:'phone',label:'电话',width:200,slotName:'phone'},
      {prop:'createTime',label:'创建时间',width:250,slotName:'createTime'},
      {prop:'updateTime',label:'更新时间',width:250,slotName:'deptId'},
      {prop:'deptId',label:'部门'}
    ]



    return {
      searchFormConfig,
      formData,
      userList,
      userCount,
      propList,

    }
  }
})
</script>

<style scoped>
  .xw-form {
    padding-top: 5px
  }

  .content {
    padding: 20px;
    border-top:20px solid #ffff
  }


</style>
