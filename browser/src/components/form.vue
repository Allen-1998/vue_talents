<template>
  <div>
    <el-form
      ref="addFormRef"
      :model="formObj"
      :rules="$rules.common"
      status-icon
    >
      <el-form-item
        v-for="(item, index) in formList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :rules="[
          {
            required: item.required,
            message: `${item.label}不能为空`,
            trigger: 'blur',
          },
          {
            type:
              item.type === 'date'
                ? 'date'
                : item.type === 'daterange'
                ? 'array'
                : 'string',
            validator: $rules.common[item.prop],
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          class="form-input fl"
          v-model="item[item.prop]"
          v-if="item.type === 'input'"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
        ></el-input>
        <el-input
          class="form-input fl"
          type="textarea"
          :rows="3"
          maxlength="50"
          show-word-limit
          resize="none"
          v-else-if="item.type === 'textarea'"
          :placeholder="item.placeholder"
          v-model="item[item.prop]"
        >
        </el-input>
        <el-radio-group
          class="form-radio fl"
          v-model="item[item.prop]"
          v-else-if="item.type === 'radio'"
        >
          <el-radio label="1">{{ "1" | formatRadio(item.prop) }}</el-radio>
          <el-radio label="0">{{ "0" | formatRadio(item.prop) }}</el-radio>
        </el-radio-group>
        <el-date-picker
          class="fl"
          v-model="item[item.prop]"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="timestamp"
          :picker-options="pickerOptions"
          v-else-if="item.type === 'date'"
        >
        </el-date-picker>
        <el-date-picker
          class="fl"
          v-model="item[item.prop]"
          type="daterange"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="timestamp"
          :picker-options="pickerOptions"
          v-else-if="item.type === 'daterange'"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formList: {
      type: Array,
      default: () => [],
    },
    formObj: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      //日期禁用范围
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() > Date.now() ||
            time.getTime() < Date.now() - 60 * 365 * 24 * 60 * 60 * 1000
          );
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/.el-form-item__error {
  margin-left: 150px;
}
/deep/.el-form-item__label {
  width: 150px;
}
</style>
