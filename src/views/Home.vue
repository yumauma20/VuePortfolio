<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <Title class="main" title="Welcome to Your Vue.js App"/>
      <div class="texts">
        <text-box v-for="text in texts" :key="text.title" :item="text" />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/HelloWorld.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'Home',
  components: {
    Title,
    TextBox
  },
  data () {
    return {
      texts: [
        {
          title: 'サンプルタイトル',
          content: 'サンプルテキスト'
        },
        {
          title: 'サンプルタイトル２',
          content: 'サンプルテキスト２'
        },
        {
          title: 'サンプルタイトル3',
          content: 'サンプルテキスト3'
        }
      ]
    }
  }
}

</script>
<style lang="scss">
  .main {
    color: red;
  }
</style>
