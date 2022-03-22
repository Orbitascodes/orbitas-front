<template>
  <div class="main-tasks">
    <div class="title-area">
      <p><strong>Define task's objective</strong></p>

      <v-switch v-model="switchOption" flat label="info"></v-switch>
    </div>
    <v-layout class="objectives-area" wrap>
      <v-flex xs6 v-for="(item, index) in objectives" :key="index">
        <objective :name="item.name" :active="item.active" :index="index" @activate="action" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import objective from './objectives';

export default {
  components: {
    objective,
  },
  data() {
    return {
      switchOption: true,
      objectives: [
        { active: true, name: 'Clustering' },
        { active: false, name: 'Classification' },
        { active: false, name: 'Anomaly detection' },
        { active: false, name: 'Optimization' },
        { active: false, name: 'Regression' },
      ],
    };
  },
  methods: {
    action(v) {
      this.objectives.forEach((curr, index) => {
        if (curr.active) {
          this.objectives[index].active = false;
        }
      });

      this.objectives[v].active = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.objectives-area {
  max-width: 50%;
}
.title-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 25px;
  align-content: center;
  margin-top: 30px;
  .v-input--selection-controls {
    margin-top: 0;
    height: 25px;
    padding: 0;
  }
}
</style>
