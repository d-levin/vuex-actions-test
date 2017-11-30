<template>
  <div>
    <GrandChild @click="$emit('click')"/>
  </div>
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
