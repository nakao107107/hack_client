<template>
  <div>
    <div class="course-title">
      <p>「{{getCourse.spot.name}}」デートコース</p>
    </div>
    <google-map :course="getCourse"/>
    <div class="card-container">
      <div class="card">
        <img :src="getCourse.lunch.image_url" alt="" class="img">
        <div class="info-container">
          <p class="type">LUNCH</p>
          <p class="title">{{getCourse.lunch.name}}</p>
          <p>12:00~14:00</p>
        </div>
      </div>
      <div class="card">
        <img :src="getCourse.cafe.image_url" alt="" class="img">
        <div class="info-container">
          <p class="type">CAFE</p>
          <p class="title">{{getCourse.cafe.name}}</p>
          <p>10:00~17:00</p>
        </div>
        
      </div>
      <div class="card">
        <img :src="getCourse.dinner.image_url" alt="" class="img">
        <div class="info-container">
          <p class="type">DINNER</p>
          <p class="title">{{getCourse.dinner.name}}</p>
          <p>17:00~21:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import course from '@/store/courses'
import Map from '@/components/DetailPage/Map'

export default {
  components: {
    'google-map': Map
  },
  async created(){
    console.log(this.$route.params.id);
    await course.dispatch("getCourse", this.$route.params.id)
  },
  data(){
    return {
      courses:{}
    }
  },
  computed: {
    getCourse(){
      return course.getters.course;
    }
  }

  
}
</script>

<style lang="scss" scoped>
.course-title {
  margin-top: 60px;
  height: 60px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 600;
}
.card {
  text-align: left;
  display: flex;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);

  .img {
    width: 15vw;
    height: 15vw;
    object-fit: cover;
    margin-right: 10px;
  }
  .title {
    font-family: 'proxima-nova';
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 1px;
  }
}

.type {
  color: #daa520;
  font-weight: 600;
  margin-bottom: 10px;
}

.card-container {
  width: 60%;
  margin: 60px auto;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

</style>

