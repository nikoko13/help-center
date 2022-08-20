<template>
  <v-container style="max-width: 600px">
    <v-breadcrumbs :items="breadCrumbs" class="px-0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <h1>{{ query }}</h1>
    <p v-if="totalArticleCount != null" class="mb-6" style="opacity: 0.5">
      Showing {{ visibleIndex }} of {{ totalArticleCount }} results
    </p>
    <div v-for="(article, i) in searchArticles" :key="i">
      <div v-if="i < visibleIndex">

        <div>
          <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
        </div>
        <span class="list-article-subtitle mt-3 mb-12">
          {{ article.description }}
        </span>
      </div>
    </div>

    <v-btn 
      v-if="showLoadModeBtn"
      color="rgb(255, 136, 62)"
      style="color: white"
      @click="showMoreArticles()"
    >
      Show more
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      visibleIndex: 10,
      showLoadModeBtn: false,
      searchArticles: [],
      totalArticleCount: null,
      queryParams: [],
      nextSearchArticles: [],
      breadCrumbs: [
        {
          text: "Help Center",
          disabled: false,
          to: "/",
        },
        {
          text: "Search Results",
          disabled: true,
          to: "/",
        },
      ]
    }
  },
  async mounted() {

    const route = useRoute();
    const query = route.query.query;

    let str = query.toString();
    str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,"").replace(/\s+/g, " ");
    // remove special characters
    str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    // lowercase trandfo
    let queryArray = str.toLowerCase().split(" ");
    // convert qwuery string to array
    this.queryParams = [];
    for (var i = 0; i < queryArray.length; i++) {
      this.queryParams.push(
        {
          title: {
            $contains: queryArray[i],
          },
        },
        {
          _path: {
            $contains: queryArray[i],
            $not: /_index/i
          },
        },
        {
          _subcategory: {
            $contains: queryArray[i],
          },
        }
      );
    }

    await this.getArticleCount()
    this.queryArticle()
  },
  methods: {
    getArticleCount: async function() {
      const res = await queryContent()
        .where({ $or: this.queryParams })
        .only('title')
        .find();

      this.totalArticleCount = res.length
    },
    queryArticle: async function () {
      
      this.showLoadModeBtn = false

      if (this.totalArticleCount == this.visibleIndex) {
        return
      }

      this.nextSearchArticles = await queryContent()
        .where({ $or: this.queryParams })
        .skip(this.visibleIndex - 10)
        .limit(this.visibleIndex)
        .only(['title', '_path', 'description'])
        .find();

      this.searchArticles = this.searchArticles.concat(this.nextSearchArticles)

      if (this.totalArticleCount <= this.visibleIndex) {
        this.visibleIndex = this.totalArticleCount
        this.showLoadModeBtn = false
      } else {
        this.showLoadModeBtn = true
      }
    },  
    showMoreArticles: function () {
      this.visibleIndex += 10
      this.queryArticle()
    },
    generateSubTitle: function (article) {
      let str = "";

      for (var i = 0; i < article.body.children.length; i++) {
        if (article.body.children[i].tag != "p") continue;
        str += article.body.children[i].children[0].value;
      }

      return str;
    }
  }
}
definePageMeta({
  layout: "root",
});

</script>


<style>
.list-article-subtitle {
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
</style>
