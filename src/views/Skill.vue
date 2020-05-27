<template>
  <div class="skill">
    <h1>Skill</h1>
    <div class="texts">
      <text-box v-for="text in texts" :key="text.title" :item="text" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'Skill',
  components: {
    TextBox
  },
  data () {
    return {
      texts: [
        {
          title: 'PHP',
          content: 'サンプルテキスト'
        },
        {
          title: 'HTML,CSS',
          content: 'サンプルテキスト'
        },
        {
          title: 'Vue',
          content: 'サンプルテキスト'
        }
      ]
    }
  }
}
</script>
