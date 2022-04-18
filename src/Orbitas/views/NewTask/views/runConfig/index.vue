<template>
  <div class="main-run-config">
    <div class="box-partition">
      <p class="huge-text"><strong>Partition Strategy</strong></p>
      <div class="actions">
        <v1.base-button
          :color="partitionStrategy === 'random' ? 'secondary' : 'application-bg'"
          elevation="0"
          :default-height="false"
          @click="partitionStrategy = 'random'"
        >
          Random
        </v1.base-button>
        <v1.base-button
          :color="partitionStrategy === 'stratified' ? 'secondary' : 'application-bg'"
          elevation="0"
          :default-height="false"
          @click="partitionStrategy = 'stratified'"
        >
          Stratified
        </v1.base-button>
      </div>
    </div>

    <div class="box-partition">
      <p class="huge-text"><strong>Generalization Strategy</strong></p>
      <div class="actions">
        <v1.base-button
          :color="generalStrategy === 'train-test' ? 'secondary' : 'application-bg'"
          elevation="0"
          :default-height="false"
          @click="generalStrategy = 'train-test'"
        >
          Train-Test
        </v1.base-button>
        <v1.base-button
          :color="generalStrategy === 'train-v-h' ? 'secondary' : 'application-bg'"
          elevation="0"
          :default-height="false"
          @click="generalStrategy = 'train-v-h'"
          :outlined="!generalStrategy === 'train-v-h'"
        >
          Train-Validation-Holdout
        </v1.base-button>
        <v1.base-button
          :color="generalStrategy === 'cross-validation' ? 'secondary' : 'application-bg'"
          elevation="0"
          :default-height="false"
          @click="generalStrategy = 'cross-validation'"
          :outlined="!generalStrategy === 'cross-validation'"
        >
          Cross-Validation
        </v1.base-button>
      </div>

      <div class="actions-input">
        <div v-if="generalStrategy === 'train-test'" class="left">
          <div class="input-area">
            <p><strong>Test percentage</strong></p>
            <v1.base-input
              v-model="test"
              solo
              outlined
              flat
              type="text"
              height="60"
              hide-details="auto"
            />
          </div>
        </div>
        <div v-else-if="generalStrategy === 'train-v-h'" class="left">
          <div class="input-area">
            <p><strong>Validation percentage</strong></p>
            <v1.base-input
              solo
              outlined
              v-model="validation"
              flat
              type="text"
              height="60"
              hide-details="auto"
            />
          </div>
          <div class="input-area">
            <p><strong>Holdout percentage</strong></p>
            <v1.base-input
              solo
              v-model="holdout"
              outlined
              flat
              type="text"
              height="60"
              hide-details="auto"
            />
          </div>
        </div>
        <div v-else class="left">
          <div class="input-area">
            <p><strong>Number of Folds</strong></p>
            <v1.base-input solo outlined flat type="text" height="60" hide-details="auto" />
          </div>
          <div class="actions">
            <v1.base-button
              :color="foldsConfig === 'shuffle' ? 'secondary' : 'application-bg'"
              elevation="0"
              :default-height="false"
              @click="foldsConfig = 'shuffle'"
              :outlined="!foldsConfig === 'shuffle'"
            >
              Shuffle
            </v1.base-button>
            <v1.base-button
              :color="foldsConfig === 'unshufle' ? 'secondary' : 'application-bg'"
              elevation="0"
              :default-height="false"
              @click="foldsConfig = 'unshufle'"
              :outlined="!foldsConfig === 'unshufle'"
            >
              Unshufle
            </v1.base-button>
          </div>
        </div>
        <div class="right">
          <div v-if="generalStrategy === 'train-test'">
            <div class="label-train">
              <p>
                <strong>{{ 100 - test }}% Train data</strong>
              </p>
              <p>
                <strong>{{ test ? test : 0 }}% Test data</strong>
              </p>
            </div>
            <div class="crescent">
              <div
                :style="{
                  '--width': `${testWidth.train}px`,
                }"
                class="train-data"
              ></div>
              <div
                :style="{
                  '--width': `${testWidth.test}px`,
                }"
                class="test-data"
              ></div>
            </div>
          </div>
          <div v-if="generalStrategy === 'train-v-h'">
            {{ trainValidationHWidth }}
            <div class="label-train">
              <p>
                <strong>% Train data</strong>
              </p>
              <p>
                <strong>{{ validation ? validation : 0 }}%</strong>
              </p>
              <p>
                <strong>{{ holdout ? holdout : 0 }}% Test data</strong>
              </p>
            </div>
            <div class="crescent">
              <div
                :style="{
                  '--width': `${trainValidationHWidth.train}px`,
                }"
                class="train-data"
              ></div>
              <div
                :style="{
                  '--width': `${trainValidationHWidth.second}px`,
                }"
                class="middle"
              ></div>
              <div
                :style="{
                  '--width': `${trainValidationHWidth.test}px`,
                }"
                class="test-data"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-partition">
      <p class="huge-text"><strong>Performance Metric</strong></p>

      <div class="metrics-cols">
        <div class="left">
          <p><strong>Main Metrics to define Performance</strong></p>
          <v1.base-input-select solo flat outlined hide-details="auto" :items="itemsSelect" />
        </div>
        <div class="right">
          <p><strong>Lista de Matricas</strong></p>
          <ul>
            <li>Log Loss</li>
            <li>Area Under the Curve</li>
            <li>Kolmogorov-Smirnov</li>
            <li>F1 Score</li>
            <li>True Positive Rating (sensitive)</li>
            <li>Negative Predict Value</li>
            <li>Accuracy</li>
            <li>MCC - Matheus Correlation Value</li>
            <li>Average Profit</li>
            <li>Total Profit</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const WIDTH_TOTAL = 580;
export default {
  data() {
    return {
      generalStrategy: 'train-test',
      partitionStrategy: 'random',
      foldsConfig: 'shuffle',
      test: 0,
      holdout: 0,
      validation: 0,
    };
  },
  computed: {
    itemsSelect() {
      return ['Log Loss'];
    },
    testWidth() {
      const percent = this.test;
      const transform = percent / 100;
      const test = transform * WIDTH_TOTAL;
      const train = WIDTH_TOTAL - test;
      return { test, train };
    },
    trainValidationHWidth() {
      return this.extractPercent('validation');
    },
  },
  methods: {
    extractPercent(type) {
      const percent = this[type];
      const transform = percent / 100;
      const test = transform * WIDTH_TOTAL;
      let train = WIDTH_TOTAL - test;
      if (type === 'validation') {
        const secondPercent = this.holdout / 100;
        const second = secondPercent * WIDTH_TOTAL;
        train -= test + second;
        return {
          second,
          train,
          test,
        };
      }
      return { train, test };
    },
  },
};
</script>

<style lang="scss" scoped>
.box-partition {
  border: 1px solid grey;
  margin: 20px 0;
  padding: 10px;
  .actions {
    display: flex;
    gap: 10px;
    flex-direction: row;
    margin: 20px 0;
  }
  .input-area {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

li {
  color: grey;
}

.label-train {
  display: flex;
  justify-content: space-between;
}

.crescent {
  width: 580px;
  height: 30px;
  display: flex;
  .train-data {
    width: var(--width);
    background-color: #1fde82;
    transition-duration: 0.5s;
  }
  div {
    height: 30px;
  }
  .middle {
    transition-duration: 0.5s;
    width: var(--width);
    background-color: #d6c0f5;
  }
  .test-data {
    transition-duration: 0.5s;
    width: var(--width);
    background-color: #6200ee;
  }
}

::v-deep {
  .actions-input {
    display: flex;
    gap: 600px;
    .left {
      padding-left: 50px;
    }
    .v-input {
      width: 100px;
    }
  }
  .metrics-cols {
    display: flex;
    margin: 20px 0;
    .left {
      width: 50%;
      border-right: 1px solid grey;
    }
    .right {
      padding-left: 35px;
    }
    .v-input {
      width: 250px;
    }
  }
}
</style>
