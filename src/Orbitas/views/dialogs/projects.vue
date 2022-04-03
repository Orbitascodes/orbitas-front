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
      <v-btn class="to-feature" icon @click="changeFeature('AiLab')">
        <svg-ai-lab></svg-ai-lab>
      </v-btn>
      <v-btn class="to-feature" icon @click="changeFeature('Board')">
        <svg-ai-lab></svg-ai-lab>
      </v-btn>
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
  methods: {
    changeFeature(feature) {
      this.$store.commit('changeFeature', feature);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-projects {
  padding: 20px 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  align-items: center;
  justify-content: space-between;
  .to-feature {
    margin: 10px 5px;
  }
}
</style>
