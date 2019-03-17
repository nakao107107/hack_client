<template>
  <div>
    <div class="input-form">
      <select name="" id="" class="select" v-model="atmosphere">
        <option value="1">二人でのんびりしたデート</option>
        <option value="2">二人でおしゃれな場所探し</option>
        <option value="3">二人きりの空間</option>
        <option value="4">記念日　特別なデート</option>
      </select>
      <p> で </p>
      <input v-model="place" placeholder="目的地を入力" class="input">
      <button @click="search" class="search-btn"><i class="fas fa-search"></i></button>
    </div>
    <circle-spin v-if="loadingState==1"/>
    <div class="search-result" v-if="state=='searched'">
      <div class="human-comment">
        <img src="@/assets/logo3.svg" alt="" class="img">
        <p class="comment">「{{place}}」周辺なら、こんなコースはいかがでしょうか</p>
      </div>

      <p class="type">LUNCH</p>
      <div class="card">
        <img src="@/assets/no-image.png" v-if="!lunch[0].image_url.shop_image1" class="img">
        <img :src="lunch[0].image_url.shop_image1" v-if="lunch[0].image_url" alt="">
        <div class="info-container">
          <p class="title">{{lunch[0].name}}</p>
        </div>
      </div>
      <p class="type">CAFE</p>
      <div class="card">
        <img src="@/assets/no-image.png" v-if="!cafe[2].image_url.shop_image1" class="img">
        <img :src="cafe[2].image_url.shop_image1" v-if="cafe[2].image_url" alt="" class="cafe-img">
        <div class="info-container">
          <p class="title">{{cafe[2].name}}</p>
        </div>
      </div>
      <p class="type">DINNER</p>
      <div class="card">
        <img src="@/assets/no-image.png" v-if="!dinner[1].image_url.shop_image1" class="img">
        <img :src="dinner[1].image_url.shop_image1" v-if="dinner[1].image_url" alt="">
        <div class="info-container">
          <p class="title">{{dinner[1].name }}</p>
        </div>
      </div>
      <button @click="create" class="decide-btn">決定</button>

    </div>
  </div>
</template>

<script>
import Circle from '../../node_modules/vue-loading-spinner/src/components/Circle'
export default {
  components: {
    'circle-spin': Circle
  },
  data(){
    return {
      place: "",
      state: "",
      loadingState: 0,
      location: {
        latitude:0,
        longitude: 0
      },
      lunch: [],
      dinner: [],
      cafe: [],
      atmosphere: 1,
      noImg: '@/assets/no-image.png' 
    }
  },
  methods: {
    search(){
      this.loadingState = 1;
      var url = 'http://localhost:3000/googles/search';
      
      this.$axios.get(url,{

        params: {place: this.place}

      }).catch(error => {

        return error

      }).then(response =>{

        console.log(response.data[0].geometry)
        this.location.latitude = response.data[0].geometry.location.lat
        this.location.longitude = response.data[0].geometry.location.lng


        var url = 'http://localhost:3000/googles/search_restaurant';
        
        this.$axios.get(url,{

          params: {
            atmosphere: this.atmosphere,
            latitude: this.location.latitude,
            longitude: this.location.longitude
          }

        }).catch(error => {

          this.loadingState = 0;
          return error

        }).then(response =>{
          console.log(response);
          this.lunch = response.data.lunch;
          this.dinner = response.data.dinner;
          this.cafe = response.data.cafe;
          this.loadingState = "";
        });
      });



      this.state = "searched"
    },
    create(){
      this.loadingState = "creating";
      console.log(this.lunch[0].image_url.shop_image1 );
      var request = {
        spot: {
          name: this.place,
          lat: this.location.latitude,
          lng: this.location.longitude
        },
        lunch: {
          name: this.lunch[0].name,
          lat: this.lunch[0].latitude,
          lng: this.lunch[0].longitude,
          image_url: this.lunch[0].image_url.shop_image1 
        },
        cafe: {
          name: this.cafe[2].name,
          lat: this.cafe[2].latitude,
          lng: this.cafe[2].longitude,
          image_url: this.cafe[2].image_url.shop_image1 

        },
        dinner: {
          name: this.dinner[1].name,
          lat: this.dinner[1].latitude,
          lng: this.dinner[1].longitude,
          image_url: this.dinner[1].image_url.shop_image1 
        }
      }

      console.log(request);

      var url = 'http://localhost:3000/courses';
      
      this.$axios.post(url,request
      
      ).catch(error => {

        this.loadingState = "";
        return error

      }).then(response =>{

        this.loadingState = "";
        console.log(response)
        this.$router.push({ name: 'DetailPage', params: { id: response.data.id }})

      });
    }
  }
}
</script>

<style lang="scss" scoped>
.input-form {
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 0px;
  display: flex;
  justify-content: center;
  .input {
    width: 50%;
    padding: 10px;
    font-size: 18px;
  }

  .search-btn {
    padding:10px;
    font-size: 18px;
    background-color: #daa520;
    color: #ffffff;
    cursor: pointer;
  }
}

.card {
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  width: 60%;
  margin: 10px auto 80px;
  display: flex;

  .img {
    height: 130px;
    object-fit: contain;
  }
}

.decide-btn {
  background-color: #daa520;
  padding: 10px;
  font-size: 14px;
  width: 60%;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
}

.type {
  font-size: 35px;
  font-family: "Helvetica";
  font-weight: 600;
  letter-spacing: 1px;
  color: #daa520;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    width: 22px;
    height: 2px;
    margin: 20px auto;
    background-color: #daa520;
  }
}

.human-comment {
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 auto 40px;

  .comment {
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    border: 4px solid #daa520;
  }

  .img {
    width: 80px;
    margin-right: 40px;
  }
}


.title {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
}

.select {
  background-color: white;
  padding: 20px;
  font-size: 18px;
  color: #606060;
}



  
</style>
