<template>
  <button @click="$emit('click')">Click me</button>
</template>

<script>
  export default {
    name: 'GrandChild'
  }
</script>
