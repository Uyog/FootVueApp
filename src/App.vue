<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

