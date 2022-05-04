<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 420 417.83"
        :width="width"
    :height="height"
    :fill="fill"
  >
    <g id="a" />
    <g id="b">
      <g id="c">
        <g>
          <g>
            <rect
              class="d"
              x="195"
              y="83.41"
              width="30"
              height="420"
              rx="15"
              ry="15"
              transform="translate(-83.41 503.41) rotate(-90)"
            />
            <rect
              class="d"
              x="195"
              y="-85.59"
              width="30"
              height="420"
              rx="15"
              ry="15"
              transform="translate(85.59 334.41) rotate(-90)"
            />
          </g>
          <g>
            <rect
              class="d"
              x="279.03"
              y="-1.09"
              width="30"
              height="420"
              rx="15"
              ry="15"
              transform="translate(564.4 447.65) rotate(-173.95)"
            />
            <rect
              class="d"
              x="110.97"
              y="-1.09"
              width="30"
              height="420"
              rx="15"
              ry="15"
              transform="translate(229.22 429.94) rotate(-173.95)"
            />
          </g>
        </g>
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
