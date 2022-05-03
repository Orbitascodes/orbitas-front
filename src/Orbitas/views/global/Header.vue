<template>
  <v-toolbar color="tertiary" elevation="0">
    <v-toolbar-title>
      <v-layout>
        <v-flex align-self-center>
          <img src="@/assets/images/OrbitasNew2.png" />
        </v-flex>
        <v-flex align-self-center>
          <p class="huge-text"><strong>orbitas</strong></p>
        </v-flex>
      </v-layout>
    </v-toolbar-title>

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
      class="search"
    />
    <v-btn ref="project-trigger" color="white" @click="showDialogProject = !showDialogProject" icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
  </v-toolbar>
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
.search {
  margin: 0 auto;
}
::v-deep {
  .v-toolbar__content {
    padding: 10px 78px 10px 8px;
  }
  .v-toolbar__title {
    img {
      margin-top: 5px;
      margin-right: 5px;
      width: 30px;
    }
    p {
      strong {
        color: white;
      }
    }
  }
}
</style>
