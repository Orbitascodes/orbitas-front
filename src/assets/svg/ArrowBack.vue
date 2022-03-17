<template>
  <svg :width="width" :height="height" viewBox="0 -4 30 35" fill="none"
  xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" :fill="fill" :stroke="fill === '#712EEE' ? 'white' : '#712EEE'"/>
    <path d="M16.375 10.5L11.375 15.5L16.375 20.5" 
    :stroke="fill === '#712EEE' ? 'white' : '#712EEE'"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  props: {
    fill: { type: String, default: '#712EEE' },
    width: { type: String | Number, default: 40 },
    height: { type: String | Number, default: 40 }
  }
}
</script>
