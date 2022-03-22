<template>
  <v-card
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
        <p><strong>Lorem Ipsum</strong></p>

        <div class="action">
          <v1.base-button :default-height="false" icon @click="expand">
            <v-icon tiny>
              mdi-plus
            </v-icon>
          </v1.base-button>
          <v1.base-button :default-height="false" icon @click="expand">
            <v-icon tiny>
              mdi-share
            </v-icon>
          </v1.base-button>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="card-body">
        <div class="sub-section">
          <p><span>Explore</span></p>
          <p>Step</p>
        </div>
        <div class="sub-section">
          <p><span>Clustering</span></p>
          <p>Task Objective</p>
        </div>
        <div class="sub-section">
          <p><span>Lorem Ipsum</span></p>
          <p>Data</p>
        </div>

        <div ref="content" class="content">
          <div class="title-content">
            <p>Model</p>
            <p>Lorem Ipsum</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    firstCard: { type: Boolean, default: false },
    maxWidth: { type: [Number, String], default: 485 },
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
</style>
