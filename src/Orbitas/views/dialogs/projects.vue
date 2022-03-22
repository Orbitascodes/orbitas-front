<template>
  <v-menu
    :value="projectsDialog.show"
    transition="slide-y-transition"
    :position-x="positionX"
    :position-y="positionY"
    z-index="2"
    close-on-click
    close-on-content-click
    min-width="200"
  >
    <v-card class="menu-projects">
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
    </v-card>
  </v-menu>
</template>

<script>
const NUDGE_TOP = 50;

export default {
  computed: {
    projectsDialog() {
      return this.$store.getters.projectsDialog;
    },
    positionX() {
      return this.$store.getters.projectsDialog.x;
    },
    positionY() {
      return this.$store.getters.projectsDialog.y + NUDGE_TOP;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-projects {
  padding: 10px;
}
</style>
