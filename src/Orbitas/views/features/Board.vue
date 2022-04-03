<template>
  <div class="main-board">
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

    <v-tabs-items v-model="actualTab">
      <v-tab-item value="tab-0">
        <div class="mansonry" fluid>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: ['Insights', 'Report 1', 'Report 2', 'Report 3', 'Report 4'],
      actualTab: 'tab-0',
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
}
.mansonry {
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
    // grid-column: 3 / 4;
    grid-row: 2 / 4;
  }
  &.important-1 {
    // grid-column: 2 / 4;
    // grid-row: 3 / 4;
    grid-row: 1 / 4;
  }
}
</style>
