<template>
  <GrandChild @click="$emit('click')"/>
</template>

<script>
  import GrandChild from './GrandChild'

  export default {
    name: 'Child',
    components: {
      GrandChild
    }
  }
</script>
