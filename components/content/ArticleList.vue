<template>
  <div>
    <h1><slot name="categoryHeader"></slot></h1>
    <p><slot name="categorySubHeader"></slot></p>

    <v-row v-if="subCategoryList">
      <v-col
        lg="6"
        md="6"
        sm="12"
        v-for="sub in subCategoryList"
        :key="sub.key"
      >
        <category-articles-list :subCategory="sub" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { path } = useRoute()

const queryPath = await queryContent({  where: {    _path: { $contains: path }  }}).findOne()
let subCategoryList = queryPath.subCategoryList

</script>
