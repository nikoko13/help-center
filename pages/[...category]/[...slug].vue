<template>
  <v-container class="article-wrapper">
    <div id="article">
      <ContentDoc v-slot="{ doc }">

        <v-breadcrumbs :items="breadCrumbs" class="px-0">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>

        <ContentRenderer :value="doc">
          <template #not-found>
            <h2>Category ({{ $route.params.category[0] }}) not found</h2>
            <h2>Article slug ({{ $route.params.category[1] }}) not found</h2>
          </template>
        </ContentRenderer>

        <div v-if="subCategoryContent.length">
          <h3 class="mb-3 mt-6">Related articles</h3>
          <v-row style="margin-left: -12px;margin-right: -12px;">

            <v-col lg="6" md="6" sm="12" v-for="article in subCategoryContent" :key="article">
              <v-card
                flat
                class="help-cat-card"
                :to="article._path"
              >
              <div class="mb-3" style="color: #ff883e;">
                {{ article.title }}
              </div>
              <div class="help-cat-card-desc">
                {{ article.description }}
              </div>
              </v-card>
            </v-col>
          </v-row>
        </div>

      </ContentDoc>
  </div>
  </v-container>
</template>

<script setup>

definePageMeta({
  layout: "root",
});

let tempsubCategoryContent = []
let subCategoryContent = []
const { path } = useRoute()
const queryPath = await queryContent({  where: {    _path: { $contains: path }  }}).findOne()

let breadCrumbs = [
  {
    text: "Help Center",
    disabled: false,
    to: "/",
  }
]

if (queryPath._partial == true){
  breadCrumbs.push({
    text: queryPath.title,
    disabled: true
  })
}else{
  breadCrumbs.push({
    text: queryPath._parent,
    to: queryPath._parent_path,
    disabled: false
  })
  breadCrumbs.push({
    text: queryPath.title,
    disabled: true
  })

  // query related articles

  const char_index = path.lastIndexOf("/");
  const substring = path.substring(0, char_index)

  tempsubCategoryContent = await queryContent(substring).findSurround(path, { before: 4, after: 4 })

  for (var i = 0; i < 4; i++) {

    if (subCategoryContent.length > 3) break

    // 0 to 3 ==> before
    var beforeIndex = 3 - i
    if (tempsubCategoryContent[beforeIndex] != null) {
      if (path != tempsubCategoryContent[beforeIndex]._path) {
        subCategoryContent.push(tempsubCategoryContent[beforeIndex])
      }  
    }

    // 4 to 7 ==> after
    var afterIndex = 4 + i
    if (tempsubCategoryContent[afterIndex] != null) {
      if (path != tempsubCategoryContent[afterIndex]._path) {
        subCategoryContent.push(tempsubCategoryContent[afterIndex])
      }
    }
    
    
  }

}



</script>

<style>

  #article {
    font-family: Roboto,sans-serif;
    max-width: 600px;
    margin: auto;
  }

  #article p, #article h2, #article ol, #article ul {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  #article h1 {
    margin-bottom: 8px;
    font-size: 2.2rem;
    line-height: 1.3;
  }

  #article ol, #article ul {
    padding-left: 20px;
    /* list-style-position: inside; */
    line-height: 1.6;
  }

  #article ol li {
    margin-top: 10px;
  }

  #article .help-cat-card {
    border: 1px solid #cbc9c9;
  }
  
  #article h2 a, #article h3 a, #article h4 a {
    color: black !important;
    text-decoration: none !important;
  }

</style>