<template>
  <svg
    :width="width"
    :height="height"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 482.73 459.12"
  >
    <g id="a" />
    <g id="b">
      <g id="c">
        <path
          class="d"
          d="M241.36,345.43l-107.72,56.64,20.58-119.96-87.15-84.92,120.44-17.51,53.85-109.12,53.85,109.12,120.44,17.51-87.15,84.92,20.58,119.96-107.72-56.64Zm-149.19,113.69l149.19-78.41,149.19,78.41-28.5-166.11,120.68-117.63-166.78-24.24L241.36,0l-74.58,151.14L0,175.38l120.68,117.63-28.5,166.11Z"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    fill: { type: String, default: '#712EEE' },
    width: { type: [String, Number], default: 40 },
    height: { type: [String, Number], default: 40 },
  },
};
</script>
