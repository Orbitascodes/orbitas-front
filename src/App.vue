<template>
  <v-app>
    <v-main>
      <router-view class="view tools" name="tools"></router-view>
      <v-layout>
        <div class="flex side-left">
          <router-view class="view left" name="left"></router-view>
        </div>
        <v-divider vertical></v-divider>
        <div class="flex main">
          <router-view name="header"></router-view>
          <router-view />
        </div>
      </v-layout>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.flex {
  flex: 1 1 auto;
  max-width: 100%;
  &.side-left {
    flex: unset;
    width: 240px;
  }
  &.collapsed {
    width: 90px;
  }
  transition-duration: .5s;
}
</style>
