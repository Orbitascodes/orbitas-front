<template>
  <v-container fluid>
    <v-toolbar color="application-bg" elevation="0">
      <v-toolbar-title>
        <img v-if="actualFeature === 'AiLab'" src="@/assets/images/AILAB.png" />
        <p v-else-if="actualFeature === 'Board'" class="huge-text"><strong>Boards</strong></p>
      </v-toolbar-title>

      <v-spacer v-if="actualFeature === 'Board'"></v-spacer>

      <v1.base-input
        v-if="actualFeature === 'Board'"
        dense
        solo
        outlined
        flat
        type="text"
        hide-details="auto"
        append-icon="mdi-help"
        no-margin
      />

      <v-spacer></v-spacer>

      <v1.base-input
        dense
        solo
        outlined
        flat
        type="text"
        hide-details="auto"
        append-icon="mdi-magnify"
        no-margin
        v-model="search"
      />
      <v-btn ref="project-trigger" @click="showDialogProject = !showDialogProject" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showDialogProject: false,
      search: null,
    };
  },
  watch: {
    showDialogProject(v) {
      const { x, y } = this.$refs['project-trigger'].$el.getBoundingClientRect();
      this.$store.commit('projectsDialog', { show: v, x, y });
    },
    search(value) {
      this.$store.commit('searchTasks', value);
    },
  },
  computed: {
    actualFeature() {
      return this.$store.getters.changeFeature;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-toolbar__content {
    padding: 10px 78px 10px 8px;
  }
}
</style>
