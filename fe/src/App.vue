<template>
  <div id="app">
    <component :is="`A4`"></component>
  </div>
</template>

<script>
import A4 from '@/views/a4-paper'

export default {
  components: { A4 }
}
</script>
