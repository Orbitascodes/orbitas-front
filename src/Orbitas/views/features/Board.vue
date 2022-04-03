<template>
  <div class="main-board">
    <v-layout>
      <v-flex xs4>
        <p>Current topic</p>
      </v-flex>
      <v-flex xs5>
        <v-tabs
          v-model="actualTab"
          centered
          slider-color="secondary"
          class="tabs-board"
          background-color="transparent"
          grow
        >
          <v-tab v-for="(topic, index) in topics" :key="index" :href="`#tab-${index}`">
            {{ topic }}
          </v-tab>
        </v-tabs>
      </v-flex>
      <v-flex>
        <p>Related topics</p>
      </v-flex>
      <v-flex>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="to-feature"
              icon
              v-bind="attrs"
              v-on="on"
              @click="filterIsOpen = !filterIsOpen"
            >
              <v-icon>
                mdi-tune
              </v-icon>
            </v-btn>
          </template>
          <span class="t-text">Filters</span>
        </v-tooltip>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-tabs-items v-model="actualTab">
          <v-tab-item value="tab-0">
            <div class="masonry" fluid>
              <v1.base-card board-card />
              <div class="item important-1 large">oi</div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item positioned">positioned.</div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </v-tab-item>
          <v-tab-item value="tab-1">
            <v-container fluid>
              Grid aqui 2
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
      <v-flex
        :class="{
          'filter-col': true,
          open: filterIsOpen,
        }"
      >
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: ['Insights', 'Report 1', 'Report 2', 'Report 3', 'Report 4'],
      actualTab: 'tab-0',
      filterIsOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  a.v-tab {
    font-size: 12px !important;
    max-width: 100px !important;
    text-transform: initial;
    &.v-tab--active {
      color: #712eee;
      font-weight: 700;
    }
  }
  .v-tabs-slider-wrapper {
    max-width: 100px;
  }
  .v-window-item {
    padding: 10px;
  }
}
.masonry {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 100%;
  padding: 3rem 0;
}
.item {
  background-color: red;
  min-height: 200px;
  height: 100%;
  width: 100%;
  &.positioned {
    grid-column: 2 / 4;
  }
  &.important-1 {
    grid-column: 2 / 4;
    height: 400px;
  }
}
.filter-col {
  max-width: 0;
  transition-duration: 0.5s;
  padding: 10px;
  &.open {
    border-left: 1px solid rgba(128, 128, 128, 0.199);
    max-width: 500px !important;
  }
}
</style>
