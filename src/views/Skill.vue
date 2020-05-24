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
          content: 'バイトでやってるよ'
        },
        {
          title: 'HTML,CSS',
          content: '昔やってた'
        },
        {
          title: 'Vue',
          content: 'やるぞおおおお'
        }
      ]
    }
  }
}

</script>
<style lang="scss">
  h1 {
    color: red;
  }
</style>
