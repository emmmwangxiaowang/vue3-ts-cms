<template>
  <div class="xw-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :formData="formData">
        <el-row>
          <template v-for="item in formItems" :key="item.label">
            <el-col v-bind="colLayout">
              <el-form-item :label="item.label">
                <template v-if="item.type==='input'||item.type==='password'">
                  <el-input
                  class="el-input"
                  :placeholder="item.placeholder"
                  :show-password="item.type==='password'"
                  v-model="formData[`${item.field}`]" />
                </template>

                <template v-else-if="item.type==='select'">
                  <el-select :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]" >
                    <el-option
                      v-for="option in item.options"
                      :key="option.value"
                      :value="option.value"

                      >{{ option.title }}</el-option>
                  </el-select>
                </template>

                <template v-else-if="item.type==='datepicker'"
                >
                  <el-date-picker v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"></el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>


        </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types';

export default defineComponent({

  props:{
    modelValue:{
      type:Object,
      required:true
    },
    formItems:{
      type:Array as PropType<IFormItem[]>,
      default:()=>{
        []
      }
    },
    labelWidth:{
      type:String,
      default:'100px'
    },
    colLayout:{
      type:Object,
      default:()=>({
        xl:6,
        lg:8,
        md:12,
        sm:24,
        xs:24
      })
    }

  },
  emits:['update:modelValue'],
  setup (props,{emit}) {

    // 单向数据源原则
    // const formData = computed({
    //   // 其它组件只获取值, 不改变值
    //   get:()=> props.modelValue,
    //   // set 还是 交给数据本身所在的组件
    //   set:(newValue)=>{
    //     emit('update:modelValue',newValue)
    //   }
    // })

    const formData=ref({...props.modelValue})

    // 监听到属性变化的时候就通知 数据所在组件进行改变
    watch(formData,(newValue)=>emit('update:modelValue',newValue),{
      // 对象的深度监听
      deep:true
    })

    return {
      formData
    }
  }
})
</script>

<style lang="less" scoped>
// /deep/input::-webkit-input-placeholder {
//   color: #17a1e5;
//   font-size: 15px;
// }

// // 改变input框背景颜色
// /deep/.el-input__inner {
//   background-color: #fff;
// }

.header {
  align-items: center;
  text-align: center;
}



</style>
