<template>
  <div class="map">
    <GmapMap :center="{lat: course.spot.lat, lng: course.spot.lng}" :zoom="14" class="map">
      <GmapMarker
        :position="{lat: course.spot.lat,lng: course.spot.lng}"
        :title="course.spot.name"
        :clickable="true" :draggable="false" @click="toggleInfoWindow(course.spot.name, 0)"></GmapMarker>
      <GmapMarker
        :position="{lat: course.lunch.lat,lng: course.lunch.lng}"
        :title="course.lunch.name"
        :clickable="true" :draggable="false" @click="toggleInfoWindow(course.spot.name, 1)"></GmapMarker>
      <GmapMarker
        :position="{lat: course.dinner.lat,lng: course.dinner.lng}"
        :title="course.dinner.name"
        :clickable="true" :draggable="false" @click="toggleInfoWindow(course.spot.name, 2)"></GmapMarker>
      <GmapMarker
        :position="{lat: course.cafe.lat,lng: course.cafe.lng}"
        :title="course.cafe.name"
        :clickable="true" :draggable="false" @click="toggleInfoWindow(course.spot.name, 3)"></GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: [
    "course"
  ],
  created(){
    console.log(this.course);
  },
  methods: {
    toggleInfoWindow (name, id) {
      console.log("toggle");
      this.infoWinOpen = false
      this.infoWindowPos = {lat: 35,lng: 135}
      this.infoContent = name
      this.infoWinOpen = true
    },
  },
  computed: {
    center_lat(){
      return this.course.lat;
    },
    center_lng(){
      return this.course.lng;
    },
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>

