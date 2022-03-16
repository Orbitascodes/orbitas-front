<template>
  <div class="main-input">
    <v-text-field
      v-if="type === 'text'"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' }
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
}
</style>
