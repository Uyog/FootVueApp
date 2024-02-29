<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="product-card" @click="viewProduct(product)">
          <img :src="product.image" class="product-image" alt="Product Image">
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Orange Pumas",
          description: "Description of Product 1",
          price: "$50",
          image: "https://images.unsplash.com/photo-1612387605285-7ee92eae6958?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 2,
          name: "Adiddas Football",
          description: "Description of Product 2",
          price: "$75",
          image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 3,
          name: "Nike Phantom GT Elite FG",
          description: " Description of Product 3",
          price: "$85",
          image: "https://images.unsplash.com/photo-1597274791287-72d00bf0dc80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 4,
          name: "Nike Mercurial",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1614739947439-ad507bf07111?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 5,
          name: "Adiddas",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1506079906501-adbb5907b720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 6,
          name: "Pumas",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1684355414542-2e22ad6e958f?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 7,
          name: "Adiddas",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1509419573860-712f07d5310f?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 8,
          name: "Adiddas",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 9,
          name: "Brazil Jersey",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1552066379-e7bfd22155c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: 10,
          name: "Real Madrid Jersey",
          description: "Description of profuct 4",
          price: "$90",
          image:"https://images.unsplash.com/photo-1635710064268-69aa5d9355c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
      

        // Add more products as needed
      ]
    };
  },
  methods: {
    viewProduct(product) {
      // Navigate to the product details page or perform any other action
      console.log("View Product:", product);
    }
  }
};
</script>

<style scoped>
.product-card {
  cursor: pointer;
  margin-bottom: 10px;
}

.product-image {
  width: 100%;
}

.product-details {
  padding: 10px;
}
</style>
