<template>
  <div>
    <div class="hero-header">
      <img src="@/assets/top-image.jpg" alt="" class="hero-img">
      <div class="text-content">
        <p class="message msg1"><span class="negative">「いつも通り」</span>　のデートの食事を</p>
        <p class="message msg2"><span class="possitive">「忘れられない」</span>　デートの食事に</p>
      </div>
    </div>
    <h2 class="content-title">COURSES</h2>
    <index/>
  </div>
</template>

<script>
import Index from '@/components/IndexPage/Index'
import Course from '@/store/courses'
export default {
  components: {
    Index
  },
  created(){
    Course.dispatch("getCourses")
  }
}
</script>

<style lang="scss" scoped>
.hero-header {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 60px;


  .hero-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //filter: blur(4px);
    
    object-fit: cover;

    
  }

  .text-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #111111;
    animation-name: slidein;
    animation-duration: 2s;
    transition-timing-function: ease-in-out;

    .message {
      font-size: 25px;
      background-color: white;
      color: #222222;
      font-weight: 600;
      padding: 12px;
      box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
      letter-spacing: 2px;
      animation-name: fadein;
      animation-duration: 2s;
    }

    .msg1 {
      transform: translate(100px, 300px);
      animation-delay: 1.5s;
      animation-fill-mode: backwards;
      transition-timing-function: ease-out;
    }

    .msg2 {
      transform: translate(150px, 350px);
      animation-delay: 2.5s;
      animation-fill-mode: backwards;
      transition-timing-function: ease-out;
    }
  }
}
.content-title {
  font-size: 35px;
  font-family: "Helvetica";
  font-weight: 600;
  letter-spacing: 1px;
  color: #333333;
  margin-bottom: 60px;

  &::after {
    content: "";
    display: block;
    width: 22px;
    height: 2px;
    margin: 20px auto;
    background-color: #222222;
  }
}

@keyframes slidein {
  from {
    width: 100%;
  }

  to {
    width: 33%;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.negative {
  color: #77776E;
}

.possitive {
  color: #daa520;
}

</style>

