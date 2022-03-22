<template>
  <v-btn
    @click="showHelpUser = !showHelpUser"
    elevation="2"
    class="tools-trigger"
    fab
    right
    bottom
    absolute
    ><img src="@/assets/images/Tools.png"
  /></v-btn>
</template>

<script>
export default {
  computed: {
    showHelpUser: {
      get() {
        return this.$store.getters.showHelpUser;
      },
      set(v) {
        this.$store.commit('showHelpUser', v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tools-trigger {
  bottom: 30px !important;
  z-index: 99999999999;
}
</style>
