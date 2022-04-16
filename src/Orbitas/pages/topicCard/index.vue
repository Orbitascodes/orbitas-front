<template>
  <div>
    <p>Back to the {{ cardData.topic }}</p>
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
