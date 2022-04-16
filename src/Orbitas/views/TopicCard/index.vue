<template>
  <p>Detalhes do card</p>
</template>

<script>
export default {
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
