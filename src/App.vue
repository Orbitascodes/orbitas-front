<template>
  <v-app>
    <v-main>
      <router-view class="view tools" name="tools"></router-view>
      <router-view name="header"></router-view>
      <v-layout>
        <div v-if="!routesToSkip.includes(routeName)" class="flex side-left" ref="sidebar">
          <router-view class="view left" name="left"></router-view>
        </div>
        <v-divider vertical></v-divider>
        <div class="flex main">
          <div class="main-scroll">
            <router-view />
          </div>
        </div>
      </v-layout>
    </v-main>

    <dialog.projects />
    <dialog.help-user />
    <dialog.topic />
  </v-app>
</template>

<script>
const ROUTES_TO_SKIP = ['login', 'signup', 'recover'];

export default {
  data() {
    return {
      routesToSkip: ROUTES_TO_SKIP,
    };
  },
  components: {
    'dialog.projects': () => import('./Orbitas/views/dialogs/projects.vue'),
    'dialog.help-user': () => import('./Orbitas/views/dialogs/helpUser.vue'),
    'dialog.topic': () => import('./Orbitas/views/dialogs/topics.vue'),
  },
  computed: {
    sidebarHasCollapsed() {
      return this.$store.getters.sidebarHasCollapsed;
    },
    routeName() {
      return this.$route.name;
    },
  },
  watch: {
    sidebarHasCollapsed(v) {
      v && this.$refs.sidebar.classList.add('collapsed');
      !v && this.$refs.sidebar.classList.remove('collapsed');
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  flex: 1 1 auto;
  max-width: 100%;
  &.side-left {
    flex: unset;
    width: 240px;
  }
  &.collapsed {
    width: 65px !important;
  }
  transition-duration: 0.5s;
}
</style>
