<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 3" :key="i">
          <div v-if="i == 0">
            <v-expansion-panel-header>
              Feature Description
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout>
                <v-flex>
                  <p>Feature 1</p>
                  <p>Label</p>
                  <p>Description</p>
                  <p>Semantics</p>
                </v-flex>
                <v-flex>
                  <p>Feature 1</p>
                  <p>Label</p>
                  <p>Description</p>
                  <p>Semantics</p>
                </v-flex>
                <v-flex>
                  <p>Feature 1</p>
                  <p>Label</p>
                  <p>Description</p>
                  <p>Semantics</p>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </div>
          <div v-else-if="i == 1">
            <v-expansion-panel-header>
              Data Type
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout>
                <v-flex>
                  <p>Nominal (Categorical)</p>
                </v-flex>
                <v-flex>
                  <p>Interval (Number: Float)</p>
                </v-flex>
                <v-flex>
                  <p>Interval (Number: Integer)</p>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </div>
          <div v-else-if="i == 2">
            <v-expansion-panel-header>
              Statistics Preview
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout>
                <v-flex>
                  <v1.base-chart :options="option2"></v1.base-chart>
                </v-flex>
                <v-flex>
                  <v1.base-chart :options="option"></v1.base-chart>
                </v-flex>
                <v-flex>
                  <v1.base-chart :options="option"></v1.base-chart>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-layout class="list-information-explore">
        <v-flex class="infos">
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
        </v-flex>
        <v-flex class="infos">
          <p>123.2</p>
          <p>134.41</p>
          <p>239.9</p>
          <p>423.4</p>
        </v-flex>
        <v-flex class="infos">
          <p>10</p>
          <p>11</p>
          <p>8</p>
          <p>7</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        'Table View',
        'Univariate Analysis',
        'Multivariate Analysis',
        'Feature Engineering',
        'Recomended Feature Selection',
      ],
      option: {
        title: {
          subtext: 'Min: \nLower Limit: \nMean: \nMedian: \nUpper Limit: \nMax: \nNulls: 6',
          bottom: '20%',
        },
        xAxis: {
          type: 'category',
          show: false,
        },
        grid: {
          height: 100,
          left: '50%',
          width: 100,
        },
        color: 'grey',
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [
          {
            data: [120, 150, 200, 150, 120],
            type: 'bar',
          },
        ],
      },
      option2: {
        title: {
          text: 'Distinct values: 68',
          subtext: 'Top 3',
          textStyle: {
            fontSize: 12,
            fontWheight: 'normal',
          },
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        grid: {
          height: 100,
          left: '20%',
          width: 150,
        },
        color: 'grey',
        yAxis: {
          type: 'category',
          data: ['C', 'B', 'A'],
        },
        series: [
          {
            data: [120, 150, 200],
            type: 'bar',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .layout.list-information-explore {
    margin-top: 40px;
    .flex {
      &:nth-child(n + 2) {
        p {
          text-align: right;
        }
      }
      &.infos {
        margin: 5px;
        p {
          padding: 5px;
          font-weight: 700;
          &:nth-child(odd) {
            background-color: rgb(199, 199, 199);
          }
        }
      }
    }
  }
}
</style>
