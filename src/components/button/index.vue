<template>
  <div class="main-button">
    <v-btn
      v-bind="$attrs"
      v-on="$listeners"
      depressed
      :elevation="elevation"
      :class="{
        'card-button': cardButton,
        'default-height': defaultHeight
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
    cardButton: { type: Boolean, default: false },
    defaultHeight: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-btn {
    &.default-height {
      height: 53px !important;
    }
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
