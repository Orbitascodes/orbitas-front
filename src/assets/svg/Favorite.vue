<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 55 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.5 0L33.8986 16.2381H54.6051L37.8532 26.2738L44.2519 42.5119L27.5 32.4762L10.7481 42.5119L17.1468 26.2738L0.39489 16.2381H21.1014L27.5 0Z"
      :fill="fill"
    />
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
