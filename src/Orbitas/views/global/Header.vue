<template>
  <v-toolbar color="application-bg" elevation="0">
    <svg-arrow-back
      @click.native="sidebarHasCollapsed = !sidebarHasCollapsed"
      :fill="sidebarHasCollapsed ? '#712EEE00' : '#712EEE'"
      :class="{
        back: true,
        flip: sidebarHasCollapsed,
      }"
    />

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
    />
    <v-btn ref="project-trigger" @click="showDialogProject = !showDialogProject" icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      showDialogProject: false,
    };
  },
  computed: {
    sidebarHasCollapsed: {
      get() {
        return this.$store.getters.sidebarHasCollapsed;
      },
      set(v) {
        this.$store.commit('sidebarHasCollapsed', v);
      },
    },
  },
  watch: {
    showDialogProject(v) {
      const { x, y } = this.$refs['project-trigger'].$el.getBoundingClientRect();
      this.$store.commit('projectsDialog', { show: v, x, y });
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
.back {
  transform: translateY(-4px);
  cursor: pointer;
  &.flip {
    transform: rotate(180deg);
  }
}
</style>
