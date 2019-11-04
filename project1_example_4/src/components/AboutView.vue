<template>
  <div class="about">
    <div class="header">
      <span class="header__title">About</span>
    </div>
    <img class="about__image circle" src="/static/hacktiv8.png" alt="Hacktiv8">
    <p>This website was build by <a href="https://hacktiv8.com" target="_blank">Hacktiv8</a> to demonstrate some of
      the potential of VueJS.
      If you have any questions leave them in the comment section of the corresponding post on our website. found on
      <a href="https://hacktiv8.com" target="_blank"></a></p>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .about {

    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;

  p {
    text-align: center;
  }

  .about__image {
    width: 150px;
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  }

</style>
