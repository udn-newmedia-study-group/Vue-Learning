<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      message: 'Halo world.'
    }
  }
}
</script>