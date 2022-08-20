<template>
  <div>
    <v-app-bar color="white" prominent>

      <template v-slot:prepend >
        <nuxt-link to="/" style="height: 48px;">
          <img
            id="brand1"
            src="~/assets/logo.png"
            alt="Help Center Home Page"
          />
        </nuxt-link>
      </template>

      <v-toolbar-title class="d-none d-sm-flex" >
        <span style="color: rgb(81, 81, 81)"> Help Center </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <a href="https://www.elementari.com" target="_blank" style="text-decoration: none;" class="d-none d-sm-flex">
        <span style="color: rgb(81, 81, 81); font-weight: 600">
          Elementari
          <v-icon size="24" >mdi-open-in-new</v-icon> 
        </span>
      </a>
    
      
    </v-app-bar>

  </div>
</template>


<style scope>

  #brand1 {
    
    height: 48px;
    width: 48px;
    
    
  }
</style>