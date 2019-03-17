<template>
  <div class="card" @click="goDetail">
    <div class="img-container">
      <img :src="course.lunch.image_url" alt="" class="img">
      <img :src="course.dinner.image_url" alt="" class="img">
      <img :src="course.cafe.image_url" alt="" class="img">
      <div class="title-container">
        <p class="title">「{{course.spot.name}}」デートコース</p>
      </div>
      <div class="view-more">
        <p class="message">VIEW MORE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "course"
  ],
  methods: {
    goDetail(){
      console.log(this.course.id);
      this.$router.push({ name: 'DetailPage', params: { id: this.course.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  overflow: hidden;
  cursor: pointer;


  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);

  .img-container {
    font-size: 0;
    position: relative;
    height: 300px;

    .img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      transition: 1s;
    }

    .title-container {
      height: 50px;
      text-align: left;
      padding-left: 20px;
      display: flex;
      align-items: center;

      .title {
        font-weight: 600;
        font-size: 14px;
      }
    }

    .view-more {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background-color: rgba(0,0,0,0.7);
      transition: .5s;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      .message {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ffffff;
      }
    }
  }

  &:hover {
    .img{
      width: 110%;
    }
    .view-more {
      opacity: 1;
    }
  }

}
</style>