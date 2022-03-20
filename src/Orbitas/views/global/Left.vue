<template>
  <v-container>
    <v-layout class="main-sidebar">
      <v-flex>
        <div class="sidebar-header">
          <img
            v-if="!sidebarHasCollapsed"
            src="@/assets/images/Orbitas.png"
          />
          <img
            v-else
            src="@/assets/images/OrbitasCircle.png"
          />
        </div>
      </v-flex>
      <v-flex class="sidebar-footer">
        <v-layout>
          <v-flex xs3>
            <p class="centralizer">
              <img src="@/assets/images/Avatar.png" />
            </p>
          </v-flex>
          <v-flex
            :class="{
              hide: sidebarHasCollapsed,
              'user-details': true,
              show: !sidebarHasCollapsed,
            }"
          >
            <p><strong>Lorem ipsum</strong></p>
            <p class="tiny-text">
              youremail@here.com
            </p>

            <p class="logout">
              <router-link :to="{ name: 'login' }">
                <span>Logout</span>
              </router-link>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    sidebarHasCollapsed() {
      return this.$store.getters.sidebarHasCollapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-sidebar {
  flex-direction: column;
  flex-wrap: wrap;
  height: 95vh;
  .sidebar-footer {
    position: relative;
    height: fit-content;
    flex: unset;
    .user-details {
      &.hide {
        opacity: 0;
      }
      &.show {
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
    .logout {
      font-size: 12px;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
