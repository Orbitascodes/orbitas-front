<template>
  <div class="main-input">
    <v-text-field
      :class="{
        'no-margin': noMargin
      }"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  props: {
    noMargin: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  // #TODO confirmar a cor
  .v-input__slot {
    background: #FFFFFF !important;
  }
  .v-text-field--outlined {
    border-radius: 0 !important;
  }
}
.v-input {
  margin-bottom: 13px !important;
  &.no-margin {
    margin-bottom: 0 !important;
  }
}
</style>
