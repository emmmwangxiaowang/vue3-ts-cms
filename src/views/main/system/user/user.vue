<template>
  <div class="user">
    <div class="search">

      <page-search :searchFormConfig="searchFormConfig" />

      <div class="content">
        <xw-table :listData="userList" :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        :title="title"
        >
          <template #deleted="scope">
            <el-button
              :type="scope.row.deleted==1 ? 'success' :'danger'"
            >{{scope.row.deleted===1 ? "是" : "否"}}</el-button>
          </template>
          <!-- 1. header 中的插槽 -->
          <template #headerHandler>
            <el-button icon="plus" type="primary">新建用户</el-button>
            <el-button icon="refresh" type="primary">刷新</el-button>
          </template>

          <!-- 列 中的插槽 -->
          <template #createTime="scope">
            {{$filters.formatDate(scope.row.createTime)}}
          </template>
          <template #updateTime="scope">
            {{$filters.formatDate(scope.row.updateTime)}}
          </template>
          <template #option>
            <div class="handle-btns">
              <el-button icon="edit" size="mini" type="primary">编辑</el-button>
            <el-button icon="delete" type="danger">删除</el-button>
            </div>


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
      {prop:'phone',label:'电话',width:150,slotName:'phone'},
      {prop:'deleted',label:'在任',width:100,slotName:'deleted'},
      {prop:'createTime',label:'创建时间',width:230,slotName:'createTime'},
      {prop:'updateTime',label:'更新时间',width:230,slotName:'updateTime'},
      {prop:'deptId',label:'部门',width:100,slotName:'deptId'},
      {label:'操作',slotName:'option'}
    ]

    const showIndexColumn=true

    const showSelectColumn=true

    const title='用户列表'

    return {
      searchFormConfig,
      formData,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      title

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

  .handle-btns {
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
  }

</style>
