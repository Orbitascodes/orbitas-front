<template>
  <v-menu
    :value="show"
    transition="slide-x-transition"
    content-class="help-user"
    z-index="2"
    close-on-click
    close-on-content-click
    min-width="400"
  >
    <v-card class="menu-help"> </v-card>
  </v-menu>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.getters.showHelpUser;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .menu-help {
    padding: 10px;
  }
}
.help-user {
  bottom: 0;
  background-color: white;
  top: 0 !important;
  left: unset !important;
  right: 0;
}
</style>
