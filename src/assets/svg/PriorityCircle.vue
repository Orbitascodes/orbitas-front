<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15.5" cy="15.5" r="15.5" :fill="fill" />
  </svg>
</template>

<script>
export default {
  props: {
    fill: { type: String, default: '#C4C4C4' },
    width: { type: [String, Number], default: 40 },
    height: { type: [String, Number], default: 40 },
  },
};
</script>
