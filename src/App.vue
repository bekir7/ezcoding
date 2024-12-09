<template>
  <div id="app">
   
    <Navbar />
   
    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<script>
import Navbar from "./components/appbar.vue";


export default {
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  components: {
    Navbar
  
  }
};
</script>

<style>
.content {
  margin-left: 250px; /* Sidebar genişliği kadar sola kaydır */
  transition: margin-left 0.3s ease-in-out;
}
</style>