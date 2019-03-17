<template>
  <div class="header">
    <h1 class="title" @click="goHome">
      <img src="@/assets/logo3.svg" alt="" class="logo">
      <p class="name">おせっかいなあいつ</p>
    </h1>
    <h1 class="search" @click="goSearch">SEARCH</h1>
  </div>
</template>

<script>
export default {
  methods: {
    goHome(){
      this.$router.push({ name: 'IndexPage'})
    },
    goSearch(){
      this.$router.push({ name: 'SearchPage'})
    }
  }
  
}
</script>


<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 100;
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.4);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 25px;
    font-family: 'proxima-nova';
    margin-left: 20px;
    cursor: pointer;
    transition: .5s;
    padding: 0 10px;

    &:hover {
      color: #707070;
    }

    .logo {
      width: 50px;
      height: 50px;
      margin: 5px;
    }

    .name {
      font-family: 'dnp-shuei-gothic-kin-std';
      font-size: 18px;
    }
  }

  .search {
    display: inline-block;
    font-family: 'proxima-nova';
    font-weight: 600;
    font-size: 22px;
    margin-right: 20px;
    background-color: #daa520;
    color: white;
    height: 100%;
    line-height: 60px;
    padding: 0 10px;

    cursor: pointer;
  }
}

</style>

