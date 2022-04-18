<template>
  <div class="main-card" v-if="show">
    <v-card
      v-if="!boardCard"
      v-bind="$attrs"
      v-on="$listeners"
      :class="{ 'first-card': firstCard, 'regular-card': !firstCard }"
      :max-width="maxWidth"
      :min-width="maxWidth"
    >
      <template v-if="firstCard">
        <div class="card-title">
          <p><strong>New</strong></p>
          <p class="sub-title">Create a new</p>
        </div>

        <v1.base-button color="secondary" @click="sendAddEvent" elevation="1" card-button>
          <v-icon large>
            mdi-plus
          </v-icon>
        </v1.base-button>
      </template>
      <template v-else>
        <div class="card-title">
          <p>
            <strong>{{ theData.name }}</strong>
          </p>

          <div class="action">
            <v1.base-button :default-height="false" icon @click="expand">
              <v-icon tiny>
                mdi-plus
              </v-icon>
            </v1.base-button>
            <v1.base-button :default-height="false" icon>
              <v-icon tiny>
                mdi-share
              </v-icon>
            </v1.base-button>
          </div>
        </div>

        <v-divider></v-divider>

        <div class="card-body">
          <div class="sub-section">
            <p>
              <span>{{ theData.step }}</span>
            </p>
            <p>Step</p>
          </div>
          <div class="sub-section">
            <p>
              <span>{{ theData.objective }}</span>
            </p>
            <p>Task Objective</p>
          </div>
          <div class="sub-section">
            <p>
              <span>{{ theData.data }}</span>
            </p>
            <p>Data</p>
          </div>

          <div ref="content" class="content">
            <div class="title-content">
              <p>Model</p>
              <p>{{ theData.model }}</p>
            </div>

            <p>
              {{ theData.description }}
            </p>
          </div>
        </div>
      </template>
    </v-card>

    <!-- BOARD CARD -->
    <v-card class="board" elevation="0" v-else>
      <div class="header-card">
        <p class="title">
          <strong>{{ dataCard.title }}</strong>
        </p>
        <v-menu left offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" icon dark v-bind="attrs" v-on="on">
              <v-icon tiny>
                mdi-dots-vertical
              </v-icon>
            </v-btn>
          </template>
          <v-layout>
            <v-flex>
              <p class="centralizer">
                <img src="../../assets/images/retanguloCard.png" />
              </p>
            </v-flex>
            <v-flex>
              <p class="centralizer">
                <img src="../../assets/images/share.png" />
              </p>
            </v-flex>
            <v-flex>
              <p class="centralizer">
                <svg-favorite />
              </p>
            </v-flex>
            <v-flex>
              <p class="centralizer">
                <img src="../../assets/images/pin.png" />
              </p>
            </v-flex>
            <v-flex>
              <p class="centralizer">
                <svg-priority-circle />
              </p>
            </v-flex>
          </v-layout>
        </v-menu>
      </div>

      <v-layout>
        <v-flex :xs7="dataCard.note ? true : false">
          <v1.base-chart
            style="width:400px;height:400px;"
            :options="dataCard.chartOptions"
          ></v1.base-chart>
        </v-flex>
        <v-flex v-if="dataCard.note">
          <p class="note" v-html="dataCard.note" />
        </v-flex>
      </v-layout>

      <v-card-actions>
        <v-chip class="ma-2" color="blue lighten-4" text-color="white">
          {{ dataCard.topic }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn elevation="0" color="blue-grey lighten-4" @click="openInfo(dataCard.id)">
          More Info
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    firstCard: { type: Boolean, default: false },
    maxWidth: { type: [Number, String], default: 480 },
    dataCard: { type: Object, default: () => ({}) },
    boardCard: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
  },
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          show: false,
        },
        grid: {
          height: 100,
          left: 'center',
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
    };
  },
  methods: {
    sendAddEvent() {
      this.$emit('addNew');
    },
    expand() {
      if (this.$refs.content.clientHeight === 0) {
        this.$refs.content.setAttribute('style', `height: ${this.$refs.content.scrollHeight}px`);
      } else {
        this.$refs.content.removeAttribute('style');
      }
    },
    openInfo(id) {
      this.$emit('selected', id);
      console.log('card de id', id, 'selecionado');
    },
  },
  computed: {
    theData() {
      return this.dataCard;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  padding: 10px;
  display: flex;
  min-height: 126px;
  margin: 10px;
  max-height: fit-content;
}
.first-card {
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 126px;
  background-color: #d7d7d7 !important;
  .card-title {
    font-size: 20px !important;
    .sub-title {
      font-size: 16px;
    }
  }
}
.regular-card {
  flex-wrap: wrap;
  flex-direction: column;
  .card-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .action {
      display: flex;
      flex-direction: row;
    }
  }
  .card-body {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    justify-content: center;
    justify-content: space-between;
    .content {
      overflow: hidden;
      height: 0px;
      transition-duration: 0.5s;
      .title-content {
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #d7d7d7;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0 5px;
      }
    }
    .sub-section {
      text-align: center;
    }
  }
}
.header-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.v-menu__content {
  padding: 10px;
  img {
    width: 30px;
    margin: 3px;
  }
  svg {
    width: 30px;
  }
}
::v-deep {
  .v-card.board {
    flex-direction: column;
    margin: 0;
    height: 100%;
    border: 1px solid grey;
    border-radius: 0;
    padding: 12px 20px;
    .layout {
      align-items: center;
    }
    .note {
      align-self: center;
    }
    .v-card__title {
      flex-direction: column;
      p.title {
        align-self: start;
      }
    }
  }
}
</style>
