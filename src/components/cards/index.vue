<template>
  <v-card
    v-bind="$attrs"
    v-on="$listeners"
    class="first-card"
    :max-width="maxWidth"
  >
    <template v-if="firstCard">
      <div class="card-title">
        <p><strong>New</strong></p>
        <p class="sub-title">Create a new</p>
      </div>

      <v1.base-button color="secondary" @click="sendAddEvent" elevation="1" card-button>
        <v-icon
          large
        >
          mdi-plus
        </v-icon>
      </v1.base-button>
    </template>
    <template v-else>
      <div>
        testinho
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    firstCard: { type: Boolean, default: false },
    maxWidth: { type: Number | String, default: 485 }
  },
  methods: {
    sendAddEvent() {
      this.$emit('addNew')
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  padding: 10px;
  display: flex;
  min-height: 126px;
  align-items: center;
}
.first-card {
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #d7d7d7 !important;
  .card-title {
    font-size: 20px !important;
    .sub-title {
      font-size: 16px;
    }
  }
}
</style>
