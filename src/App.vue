<template>
  <div class="content-all">
    <Header />
    <div  class="content">
    <router-view></router-view>

      <!-- <MainContentBooks  /> -->
      
    </div>
    <Footer />
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import MainContentBooks from './components/MainContentBooks.vue'

export default {
  name: 'App',
  components: {
    Header,
    // MainContentBooks,
    Footer
  }
}
</script>

<style>

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
}


body{
  /* background-color: rgb(194, 194, 207); */
  background-color: rgb(37, 37, 39);
  z-index: -1;
  /* height: 100%; */
}

.content-all{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
}

.content{
  flex: 1;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgb(55, 54, 58);
}
</style>
