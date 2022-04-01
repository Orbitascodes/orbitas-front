<template>
  <div class="main-analise">
    <v-divider></v-divider>
    <v-tabs v-model="actualTab" background-color="transparent" grow>
      <v-tab v-for="(item, index) in tabItems" :href="`#tab-${index}`" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-tabs-items v-model="actualTab">
      <v-tab-item value="tab-0">
        <table-view />
      </v-tab-item>
      <v-tab-item value="tab-1">
        <univar-analysis />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import tableView from './tabs/tableView';
import univarAnalysis from './tabs/univarAnalysis';

export default {
  components: {
    tableView,
    univarAnalysis,
  },
  data() {
    return {
      actualTab: 'tab-0',
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
