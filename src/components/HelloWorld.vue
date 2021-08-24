<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://vuejs.org/" target="_blank">Vue 2 Documentation</a>
      |
      <a href="https://github.com/antfu/vue2-script-setup-transform" target="_blank">with &lt;script setup&gt; support</a>
    </p>

    <button type="button" @click="state.count++">
      count is: {{ state.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup>
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
