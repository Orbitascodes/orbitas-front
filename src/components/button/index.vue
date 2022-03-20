<template>
  <div class="main-button">
    <v-btn
      v-bind="$attrs"
      v-on="$listeners"
      depressed
      :elevation="elevation"
      :class="{
        'card-button': cardButton
      }"
    >
      <slot />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    elevation: { type: Number | String, default: 0 },
    cardButton: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-btn {
    height: 53px !important;
    margin-top: 8px;
    &.card-button {
      margin-top: 0;
      border-radius: 10px;
      max-width: 52px;
      min-width: 52px;
      max-height: 52px;
    }
  }
}
</style>
