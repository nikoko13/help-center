<template>

  <v-footer
    style="background-color: rgb(21, 101, 192)"
    class="text-white text-center d-flex flex-column"
    height="118"
  >
    <div>
      <v-btn
          class="mx-4"
          icon="mdi-youtube"
          variant="plain"
          href="https://www.youtube.com/c/elementari_io"
          target="_blank"
        ></v-btn>
        
        <v-btn
          class="mx-4"
          icon="mdi-facebook"
          variant="plain"
          href="https://www.facebook.com/elementari.io"
          target="_blank"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-twitter"
          variant="plain"
          href="https://www.twitter.com/elementari"
          target="_blank"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-linkedin"
          variant="plain"
          href="https://www.linkedin.com/company/elementari"
          target="_blank"
        ></v-btn>
    </div>

    <div class="text-white pt-0 pb-2" style="font-size: 15px">
      © {{ new Date().getFullYear() }} All Rights Reserved, Elementari ®
    </div>

    <v-divider></v-divider>

    <div class="text-white" style="font-size: 15px">
      <a href="https://elementari.com/policy/privacy" target="_blank" style="color: white">Privacy policies</a> — <a href="https://elementari.com/policy/terms" target="_blank" style="color: white">Terms</a> 
    </div>
  </v-footer>
</template>