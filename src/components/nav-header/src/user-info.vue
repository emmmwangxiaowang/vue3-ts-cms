<template>
  <div class="userinfo">
    <el-dropdown>
      <span class="el-dropdown-link">
       <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" >[  ]
       </el-avatar>
       <span class="userInfoName">{{ name }}</span>
      </span>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>

        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../../../store'

export default defineComponent({
  setup () {

    const store = useStore()
    const name=computed(()=>{
     return store.state.login.userInfo.username

    })
    // 头像的 url 也可以根据后端的返回值来确定

    return {
      name
    }
  }
})
</script>

<style scoped>

/* .userinfo {
    display: flex;
    padding: 0 0;
}

.userInfoName{
  align-items: center;
  margin-top: 10px;
} */

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;

}

</style>
