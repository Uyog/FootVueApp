<script>
import HomePage from './HomePage.vue';
import Shop from './Shop.vue';
import ContactUs from './ContactUs.vue';
import AboutUs from './AboutUs.vue';
</script>

<template>
    <v-app-bar color="black">
    <div class="Home">
        <v-btn to="/" color="white" dark >Home </v-btn>
    </div>
    <div>
        <v-btn to="/shop" color="white" dark >Shop</v-btn>
    </div>
    <div id="contact_us">
        <v-btn to="/contactus" color="white" dark >Contact Us</v-btn>
    </div>
    <div>
        <v-btn to="/aboutus" color="white" dark >About Us</v-btn>
    </div>
    </v-app-bar>

</template>





