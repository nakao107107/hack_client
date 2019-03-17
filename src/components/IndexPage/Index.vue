<template>
  <div class="grid">
    <card v-for="(course, i) in courses" :key="i" :course="course"/>
  </div>
</template>

<script>
import Card from '@/components/IndexPage/Card'
import course from '@/store/courses'
export default {
  components: {
    Card
  },
  computed: {
    courses(){
      return course.getters.courses;
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-rows: 350px;
    grid-template-columns: 1fr;
    margin: 0 auto 60px;
    grid-gap: 1rem;

    @media screen and (min-width: 780px){

      max-width: 960px;
      margin: 0 auto 60px;

      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      
    }
  }
</style>