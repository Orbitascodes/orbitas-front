<template>
  <div class="main-button">
    <v-btn
      v-bind="$attrs"
      v-on="$listeners"
      depressed
      elevation="0"
    >
      <slot />
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
::v-deep {
  .v-btn {
    height: 53px !important;
    margin-top: 8px;
  }
}
</style>
