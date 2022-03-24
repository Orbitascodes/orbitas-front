<template>
  <v-container>
    <v-toolbar color="application-bg" elevation="0">
      <v-toolbar-title>
        <img src="@/assets/images/AILAB.png" />
      </v-toolbar-title>

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
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-toolbar__content {
    padding: 10px 8px;
  }
}
</style>
