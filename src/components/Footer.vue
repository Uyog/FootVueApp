<template>
    <v-footer
      class="bg-black text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>
  
      <div class="pt-0">
        <h2>Thank you for shopping with us and hope we can keep on providing quality products for you. You can visit us on the following social platforms.</h2>
      </div>
  
      <v-divider></v-divider>
  
      
       
      
    </v-footer>
  </template>
  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
  </script>
   