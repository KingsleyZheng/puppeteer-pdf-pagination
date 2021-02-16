<template>
  <div class="place-holder">
    <div
      class="place-holder-item"
      v-for="(item, index) in phArray"
      :key="index"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    phArray() {
      let list = []
      for (let i = 0; i < this.height; i++) {
        list.push(i)
      }
      return list
    }
  }
}
</script>

<style lang="scss">
.place-holder {
  width: 100%;
  .place-holder-item {
    width: 100%;
    height: 1px;
    page-break-inside: avoid;
  }
}
</style>
