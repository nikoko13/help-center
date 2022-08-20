<template>
  <v-divider class="mt-12"></v-divider>
  <h4 class="mt-8 mb-1">{{ subCategory.name }}</h4>
  <v-list dense lines="two" density="compact">
    <v-list-items>
      <v-list-item
        v-for="(article, i) in subCategoryContent"
        :key="i"
        :value="article.title"
        :subtitle="article.title"
        :to="article._path"
        class="px-1"
      >
        <template v-slot:append>
          <v-list-item-avatar end>
            <v-btn
              text
              small
              variant="text"
              color="grey lighten-1"
              icon="mdi-chevron-right"
            ></v-btn>
          </v-list-item-avatar>
        </template>
      </v-list-item>
    </v-list-items>
  </v-list>
</template>

<script setup>
const props = defineProps({
  subCategory: Object,
});

const { path } = useRoute();
const subCategoryContent = await queryContent(path)
  .where({ _subcategory: props.subCategory.name })
  .find();


</script>

<style scope>
.v-list-item-title {
  font-size: 14px !important;
}
</style>
