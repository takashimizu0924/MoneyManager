<template>
  <v-app >
    <Navbar />
    <v-content class="grey lighten-4 mx-7 mt-8">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
