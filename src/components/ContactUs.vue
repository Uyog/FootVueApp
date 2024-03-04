<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-h5">Contact Us</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="name" label="Name"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-textarea v-model="message" label="Message"></v-textarea>
                <v-btn color="primary" type="submit">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Message:', this.message);
        
        // Example: Send form data to a backend server using Axios or fetch
        // axios.post('/api/contact', { name: this.name, email: this.email, message: this.message })
        //   .then(response => {
        //     console.log(response.data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        
        // Clear form fields after submission
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  