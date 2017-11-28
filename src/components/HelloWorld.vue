<template>
  <div>
    <Child @click="someAction"/>
  </div>
</template>

<script>
  import Child from './Child'
  import { mapActions } from 'vuex'

  export default {
    name: 'HelloWorld',
    components: {
      Child
    },
    methods: {
      ...mapActions([ 'someAction' ])
    }
  }
</script>
