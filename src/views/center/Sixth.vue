<template>
    <div>
      <h1>six</h1>
      <input type="button" @click="click">
    </div>

</template>

<script>
export default {
   name:'cjild',
  methods: {
     click() {
      alert('child')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>