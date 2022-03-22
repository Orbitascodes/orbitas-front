<template>
  <v-textarea v-bind="$attrs" v-on="$listeners" no-resize></v-textarea>
</template>

<style lang="scss" scoped>
::v-deep {
  // #TODO confirmar a cor
  .v-input__slot {
    background: #ffffff !important;
    border-radius: 0 !important;
  }
}
</style>
