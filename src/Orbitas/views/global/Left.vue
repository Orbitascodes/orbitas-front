<template>
  <div class="main-sidebar">
    <div class="sidebar-header">
      <div>
        <router-link to="/">
          <img v-if="!sidebarHasCollapsed" src="@/assets/images/Orbitas.png" />
          <img v-else src="@/assets/images/OrbitasCircle.png" />
        </router-link>
      </div>
    </div>
    <div class="wrapper-footer">
      <v-layout class="sidebar-footer">
        <div xs3>
          <p class="centralizer">
            <img src="@/assets/images/Avatar.png" />
          </p>
        </div>
        <div
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
        </div>
      </v-layout>
    </div>
    <div class="collapse">
      <svg-arrow-back
        @click.native="sidebarHasCollapsed = !sidebarHasCollapsed"
        fill="#712EEE00"
        :class="{
          back: true,
          flip: sidebarHasCollapsed,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.main-sidebar {
  flex-direction: column;
  height: 95vh;
  padding: 10px 10px;
  position: relative;
  .wrapper-footer {
    position: absolute;
    bottom: 60px;
  }
  .sidebar-footer {
    position: relative;
    height: fit-content;
    flex: unset;
    .user-details {
      margin-left: 10px;
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
      bottom: -10px;
      right: -20px;
    }
  }
  .back {
    position: absolute;
    bottom: 0;
    margin-top: 20px;
    // transform: translateX(8px);
    cursor: pointer;
    &.flip {
      transform: rotate(180deg);
    }
  }
}
</style>
