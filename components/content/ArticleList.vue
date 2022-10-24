<template>
  <div>
    <h1><slot name="categoryHeader"></slot></h1>
    <p><slot name="categorySubHeader"></slot></p>

    <v-row v-if="t">
      <v-col
        lg="6"
        md="6"
        sm="12"
        v-for="sub in categories"
        :key="sub.key"
      >
        <category-articles-list 
          :category="sub"
          :articles="queryPath"
         />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { path } = useRoute()
var t = false
const queryPath = await queryContent({  where: {    _path: { $contains: path }  }}).find()
var categories = []

// get sub category list
for (var i = 0; i < queryPath.length; i++) {
  if (queryPath[i].subCategoryList) {
    categories = queryPath[i].subCategoryList
    break
  }
}

t = true

</script>
