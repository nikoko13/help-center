<template>
  <v-app>

    <nav-bar />

    <v-main>
      <slot />
      <NuxtLoadingIndicator color="#FF9100"  />
      
    </v-main>

    <help-footer class="mt-6"/>
  </v-app>
</template>

