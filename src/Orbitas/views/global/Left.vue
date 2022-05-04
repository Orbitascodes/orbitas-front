<template>
  <div class="main-sidebar">
    <div class="sidebar-header">
      <div
        :class="{
          collapse: true,
          flip: sidebarHasCollapsed,
        }"
        @click="sidebarHasCollapsed = !sidebarHasCollapsed"
      ></div>
    </div>
    <v-list v-if="actualFeature === 'Board'" dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <component :is="item.icon" :width="20" :height="20"></component>
          <v-list-item-content>
            <v-list-item-title
              :class="{
                hide: sidebarHasCollapsed
              }"
              @click="item.action"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
    actualFeature() {
      return this.$store.getters.changeFeature;
    },
  },
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: 'Home', action: () => ({}), icon: 'svg-home' },
        {
          text: 'Topics',
          action: () => {
            this.$store.commit('openTopicModal', true);
          },
          icon: 'svg-topic',
        },
        {
          text: 'Pinned Cards',
          action: () => {},
          icon: 'svg-pinned',
        },
        { text: 'Favorites', action: () => ({}), icon: 'svg-star' },
        { text: 'Stories', action: () => ({}), icon: 'svg-story' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-item-group {
    margin-top: 17px;
    .v-list-item__content {
      margin-left: 5px;
      .hide {
        display: none;
      }
    }
  }
}
.main-sidebar {
  flex-direction: column;
  height: 94vh;
  position: relative;
  .sidebar-header {
    position: relative;
    .collapse {
      position: absolute;
      background-color: #e9e9e9;
      top: 0;
      bottom: -25px;
      left: 0;
      right: 0;
      // &.flip {
      //   transform: rotate(180deg);
      // }
      cursor: pointer;
      &::after {
        content: '〉';
        position: absolute;
        font-weight: 700;
        top: 0px;
        right: 20px;
        color: #555555;
      }
    }
    img {
      width: 169px;
      height: 42px;
      object-fit: cover;
      &.circle {
        width: 42px;
        height: 42px;
        object-fit: cover;
      }
    }
  }
  .wrapper-footer {
    position: absolute;
    bottom: 60px;
  }
  .sidebar-footer {
    padding: 10px 10px;
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
      right: 0;
    }
  }
  .back {
    position: absolute;
    bottom: 0;
    margin-top: 20px;
    cursor: pointer;
    &.flip {
      transform: rotate(180deg);
    }
  }
}
</style>
