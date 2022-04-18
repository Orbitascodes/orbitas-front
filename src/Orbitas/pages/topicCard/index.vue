<template>
  <div>
    <p @click="() => $emit('back')" class="back">Back to the {{ cardData.topic }}</p>
    <br />
    <v-chip class="ma-2" color="blue lighten-4" text-color="white">
      {{ cardData.topic }}
    </v-chip>
    <br />
    <p>{{ cardData.title }}</p>

    <section>
      <p><strong>WHAT:</strong></p>

      <p>Texto explicando o WHAT (opcional)</p>

      <v1.base-chart
        style="width:400px;height:400px;"
        :options="cardData.chartOptions"
      ></v1.base-chart>
    </section>

    <section>
      <p><strong>WHY:</strong></p>

      <p>Top reasons (opcional)</p>

      <div class="whys"></div>
    </section>

    <section>
      <p><strong>Comments:</strong></p>

      <div class="comments"></div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    cardData: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      teste: null,
    };
  },
  mounted() {
    console.log('teste', window.location.href);
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 100px auto;
}
.whys,
.comments {
  border: 1px solid grey;
  height: 100px;
  width: 80vw;
}
.back {
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  &::before {
    content: '〈';
    margin-right: 10px;
  }
}
</style>
