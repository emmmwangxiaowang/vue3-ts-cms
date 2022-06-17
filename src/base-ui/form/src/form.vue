<template>
  <div class="xw-form">
    <el-form :label-width="labelWidth">
        <el-row>
          <template v-for="item in formItems" :key="item.label">
            <el-col v-bind="colLayout">
              <el-form-item :label="item.label">
                <template v-if="item.type==='input'||item.type==='password'">
                  <el-input
                  class="el-input"
                  :placeholder="item.placeholder"
                  :show-password="item.type==='password'" />
                </template>

                <template v-else-if="item.type==='select'">
                  <el-select :placeholder="item.placeholder">
                    <el-option
                      v-for="option in item.options"
                      :key="option.value"
                      :value="option.value"
                      >{{ option.title }}</el-option>
                  </el-select>
                </template>

                <template v-else-if="item.type==='datepicker'"
                >
                  <el-date-picker v-bind="item.otherOptions"></el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>


        </el-row>
      </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { IFormItem } from '../types';

export default defineComponent({

  props:{
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

  setup () {


    const input=ref("");

    return {
      input,
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


</style>
