<template>
  <div class="text-box">
    <div class="text-title">
      <h3>{{ item.title }}</h3>
    </div>
    <p class="text-content" style="white-space:pre-line;">
      {{ item.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
