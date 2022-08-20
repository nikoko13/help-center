<template>
  <div>
    <v-breadcrumbs :items="breadCrumbs" class="px-0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

    <div class="pa-4 help-cat-card-icon my-4">
      <v-icon :icon="icon" color="#FF883E"></v-icon>
    </div>

    <h1>{{ categoryHeader }}</h1>

    <p>{{ categorySubHeader }}</p>
    
    <v-row>
      <v-col
        lg="6"
        md="6"
        sm="12"
        v-for="subCategoryContent in content"
        :key="subCategoryContent"
      >
        <category-articles-list :subCategoryContent="subCategoryContent" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps({
  breadCrumbs: Array,
  icon: String,
  categoryHeader: String,
  categorySubHeader: String,
  content: Object,
});
</script>
