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

    <v-layout v-if="!cardSelected">
      <v-flex>
        <v-tabs-items v-model="actualTab">
          <v-tab-item value="tab-0">
            <div class="masonry" fluid>
              <v1.base-card
                v-for="(card, index) in dataCards"
                :key="index"
                :dataCard="card"
                :class="`item rows-${card.priority.rows} cols-${card.priority.cols}`"
                board-card
                @selected="selected"
              />
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
    <v-layout v-else>
      <topic-card :cardData="cardSelected[0]" @back="cardSelected = null"></topic-card>
    </v-layout>
  </div>
</template>

<script>
import topicCard from '../../pages/topicCard';

export default {
  components: {
    topicCard,
  },
  data() {
    return {
      cardSelected: null,
      topics: ['Insights', 'Report 1', 'Report 2', 'Report 3', 'Report 4'],
      actualTab: 'tab-0',
      filterIsOpen: false,
      dataCards: [
        {
          title: 'Título',
          bordered: true,
          priority: {
            type: 2,
            rows: 1,
            cols: 4,
          },
          topic: 'Financeiro',
          id: 121,
          pinned: false,
          favorite: false,
          note: 'Essa nota tem tendência de alta [[alta]] e aqui tendência de baixa [[baixa]]',
          chartOptions: {
            grid: {
              height: 200,
              width: 300,
            },
            series: [
              {
                type: 'gauge',
                progress: {
                  show: true,
                  width: 15,
                },
                axisLine: {
                  lineStyle: {
                    width: 15,
                  },
                },
                splitLine: {
                  length: 15,
                  lineStyle: {
                    width: 1,
                    color: '#999',
                  },
                },
                anchor: {
                  show: true,
                  showAbove: true,
                  size: 10,
                  itemStyle: {
                    borderWidth: 10,
                  },
                },
                title: {
                  show: false,
                },
                detail: {
                  valueAnimation: true,
                  fontSize: 40,
                  offsetCenter: [0, '70%'],
                },
                data: [
                  {
                    value: 70,
                  },
                ],
              },
            ],
          },
        },
        {
          title: 'Título',
          bordered: true,
          priority: {
            type: 3,
            rows: 2,
            cols: 2,
          },
          topic: 'Financeiro',
          id: 122,
          pinned: false,
          favorite: false,
          note: 'Essa nota tem tendência de alta [[alta]] e aqui tendência de baixa [[baixa]]',
          chartOptions: {
            xAxis: {
              type: 'category',
              show: false,
            },
            grid: {
              height: 200,
              left: 30,
              width: 200,
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
        },
        {
          title: 'Título',
          bordered: true,
          priority: {
            type: 1,
            rows: 1,
            cols: 2,
          },
          topic: 'Financeiro',
          id: 123,
          pinned: false,
          favorite: false,
          chartOptions: {
            grid: {
              left: 100,
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
              type: 'value',
            },
            color: 'grey',
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    selected(id) {
      this.cardSelected = this.dataCards.filter((item) => item.id === id);
      console.log(this.cardSelected, 'teste')
    },
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1px;
  grid-auto-rows: minmax(200px, auto);
  grid-auto-flow: dense;
  padding: 1px;
}
.item {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  background-color: #ccc;
  grid-column-end: span 2;
  grid-row-end: span 1;
  &.rows-2 {
    grid-row-end: span 2;
  }
  &.rows-3 {
    grid-row-end: span 3;
  }
  &.rows-4 {
    grid-row-end: span 4;
  }
  &.cols-4 {
    grid-column-end: span 4;
  }
  &.cols-3 {
    grid-column-end: span 3;
  }
  &.cols-2 {
    grid-column-end: span 2;
  }
  &.cols-1 {
    grid-column-end: span 1;
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
