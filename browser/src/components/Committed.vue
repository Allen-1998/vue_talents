<template>
  <div>
      {{list}}
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: ()=> ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
