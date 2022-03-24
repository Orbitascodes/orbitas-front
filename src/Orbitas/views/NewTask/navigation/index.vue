<template>
  <div class="navigation-container">
    <div class="tools-navigation">
      <div>
        <p>
          <strong>{{ experimentCount ? experimentCount : 'Experiment 1' }}</strong>
        </p>
        <p class="exp-name">{{ experimentName ? experimentName : 'Experiment Name' }}</p>
      </div>

      <v1.base-button @click="openModal" :default-height="false" icon>
        <v-icon tiny>
          mdi-pencil
        </v-icon>
      </v1.base-button>
    </div>
    <div class="steps">
      <div
        v-for="(item, index) in steps"
        :key="index"
        :class="{
          step: true,
          active: actualCreationStep === index,
        }"
      >
        <p>{{ item }}</p>
      </div>
    </div>

    <div class="actions">
      <v1.base-button min-height="61" @click="goBack">
        <v-icon tiny>
          mdi-arrow-left
        </v-icon>
      </v1.base-button>
      <v1.base-button @click="continueCreation" min-height="61" color="secondary">
        Continue
      </v1.base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experimentCount: 0,
      experimentName: null,
      steps: ['Task', 'Data', 'Explore', 'Run config', 'Running', 'Evaluation', 'Publish'],
    };
  },
  methods: {
    continueCreation() {
      this.$emit('continue');
    },
    goBack() {
      this.$emit('back');
    },
    openModal() {
      this.$emit('open');
    },
  },
  computed: {
    actualCreationStep() {
      return this.$store.getters.actualCreationStep;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #e5e5e51a;
    padding: 10px;
    height: 61px;
    width: 100%;
    align-items: center;
    margin: 0 2px;
    .step {
      position: relative;
      user-select: none;
      &.active {
        font-weight: 700;
        p {
          color: #712eee !important;
        }
      }
      &::after {
        content: '〉';
        position: absolute;
        right: -25px;
        color: #2e01a12f;
        top: 2px;
      }
      &:nth-last-child(1) {
        &::after {
          content: '';
        }
      }
    }
  }
  .tools-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    height: 61px;
    background-color: #e5e5e51a;
    margin-right: 2px;
    padding: 0px 5px;
    align-items: center;
    .exp-name {
      font-size: 12px;
      text-overflow: ellipsis;
      max-width: 100px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .actions {
    margin-left: 2px;
    display: flex;
    flex-direction: row;
    .main-button {
      margin: 2px;
    }
  }
}
</style>
