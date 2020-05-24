<template>
  <div class="home">
    <h1>Yuma Naito</h1>
    <h1>PortfolioSite</h1>
    <div class="social-icon" v-for="icon in icons" :key="icon.name">
      <a :href="icon.link">
        {{ icon.name }}
        {{ icon.picture }}
      </a>
    </div>
</template>

<script>
  var icons = [
    {
      name: 'twitter',
      link: 'https://twitter.com/yumauma20',
      picture: 'sample.png'
    },
    {
      name: 'github',
      link: 'https://github.com/yumauma20',
      picture: 'sample.png2'
    }
  ]
</script>

<style>

</style>