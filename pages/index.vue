<template>
  <div>
  <v-container style="max-width: 966px;">
    
    <div class="help-search-panel mb-6 mt-4 pb-6">
      <div style="padding: 32px 16px;">
      <h1 class="text-center" style="margin-bottom: 32px;color: white;">How can we help?</h1>
      <v-row>
        <v-col
          class="ma-auto"
          cols="12"
          md="8"
          sm="10"
        >
          <v-text-field
            v-model="searchValue"
            prepend-inner-icon="mdi-magnify"
            label="Search"
            variant="solo"
            @click:prepend-inner="clickSearch"
            clearable
            clear-icon="mdi-cancel"
            @keyup.enter="clickSearch"
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      </div>
    </div>

    <v-row style="margin: auto">
      <v-col lg="4" md="6" sm="12" v-for="section in sections" :key="section">
        <v-card
          flat
          class="text-center help-cat-card"
          :to="'/' + section.to"
        >
          <div class="help-cat-card-icon-wrapper">
            <div class="pa-4 help-cat-card-icon">
              <v-icon
                color="#ff883e"
                :icon="section.icon"
                class="mb-4 mt-3"
              ></v-icon>
            </div>
          </div>
          <v-card-title class="justify-center help-cat-card-header pa-0">{{
            section.title
          }}</v-card-title>
          <v-card-text class="pa-0">
            {{ section.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

  <div class="my-6 py-5" style="background-color: #f8f8f8ee;">
  <v-container style="max-width: 966px;">
    
    <h3 class="text-center pt-5 mb-5" >Top articles</h3>

    <v-card flat v-if="topArticles.length">
    <v-tabs
      v-model="tab"
      background-color="#f8f8f8ee"
      color="#ff883e"
      class="px-2"
      grow
    >
      <v-tab value="1">account</v-tab>
      <v-tab value="2">classroom</v-tab>
      <v-tab value="3">Stories</v-tab>
      <v-tab value="4">Subscription</v-tab>
    </v-tabs>

    <v-card-text class="px-0" style="background-color: #f8f8f8ee;">
      <v-window v-model="tab">
        <v-window-item value="1">
          <v-row style="margin: auto">
            
            <v-col lg="4" md="6" sm="12" class="px-2" v-for="featured_all in getFeaturedArticles('/account-settings')" :key="featured_all._path">
              <v-card
                class="help-cat-card"
                :to="featured_all._path"
              >
              <div class="mb-3" style="color: #ff883e;">
                {{ featured_all.title }}
              </div>
              <div class="help-cat-card-desc">
                {{ featured_all.description }}
              </div>
              </v-card>
            </v-col>
            
          </v-row>
        </v-window-item>

        <v-window-item value="2">
          <v-row style="margin: auto">
            
              <v-col lg="4" md="6" sm="12" class="px-2" v-for="featured_all in getFeaturedArticles('/classroom-dashboard')" :key="featured_all._path">
                <v-card
                  class="help-cat-card"
                  :to="featured_all._path"
                >
                <div class="mb-3" style="color: #ff883e;">
                  {{ featured_all.title }}
                </div>
                <div class="help-cat-card-desc">
                  {{ featured_all.description }}
                </div>
                </v-card>
              </v-col>
            
          </v-row>
        </v-window-item>

        <v-window-item value="3">
          <v-row style="margin: auto">
            
              <v-col lg="4" md="6" sm="12" class="px-2" v-for="featured_all in getFeaturedArticles('/creating-stories')" :key="featured_all._path">
                <v-card
                  class="help-cat-card"
                  :to="featured_all._path"
                >
                <div class="mb-3" style="color: #ff883e;">
                  {{ featured_all.title }}
                </div>
                <div class="help-cat-card-desc">
                  {{ featured_all.description }}
                </div>
                </v-card>
              </v-col>
            
          </v-row>
        </v-window-item>
        <v-window-item value="4">
          <v-row style="margin: auto">
            
              <v-col lg="4" md="6" sm="12" class="px-2" v-for="featured_all in getFeaturedArticles('/payments-pricing-and-billing')" :key="featured_all._path">
                <v-card
                  class="help-cat-card"
                  :to="featured_all._path"
                >
                <div class="mb-3" style="color: #ff883e;">
                  {{ featured_all.title }}
                </div>
                <div class="help-cat-card-desc">
                  {{ featured_all.description }}
                </div>
                </v-card>
              </v-col>
            
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  </v-container>
  </div>

  <v-container style="max-width: 966px;">
    <v-row>
          <v-col
            class="ma-auto"
            lg="4" md="6" sm="12"
          >
          <div style="text-align:center;">
            <v-layout align-start>
              <v-flex>
                <v-icon
                  color="#ff883e"
                  icon="mdi-help-circle-outline"
                  class="mb-4 mt-3"
                  size="80"
                ></v-icon>
              </v-flex>
              <v-flex class="pt-3 pl-3" style="text-align: left;" >
                <h3>Contact support</h3>
                <p>Need help with something?</p>
                <a href="https://www.elementari.com/contact" target="_blank">Contact our support team</a>
              </v-flex>
            </v-layout>
          </div>
          </v-col>

          <v-col
            class="ma-auto"
            lg="4" md="6" sm="12"
          >
          <div style="text-align:center;">
            <v-layout align-start>
              <v-flex>
                <v-icon
                  color="#ff883e"
                  icon="mdi-school-outline"
                  class="mb-4 mt-3"
                  size="80"
                ></v-icon>
              </v-flex>
              <v-flex class="pt-3 pl-3" style="text-align: left;" >
                <h3>Bank of Curriculums</h3>
                <p>Find ready-to-use activities for your class <a href="https://www.elementari.com/curriculums" target="_blank">here</a>!</p>
                
              </v-flex>
            </v-layout>
          </div>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script setup>
// const tabs = [
//   'account',
//   'classroom',
//   'stories',
//   'subscription',
// ]

const sections = [
  {
    icon: "mdi-account-outline",
    title: "Account Settings",
    text: "Includes changing your email or password and deleting your account",
    to: "account-settings",
  },
  {
    icon: "mdi-book-open-page-variant-outline",
    title: "Creating Stories",
    text: "Includes changing your email or password and deleting your account",
    to: "creating-stories",
  },
  {
    icon: "mdi-school-outline",
    title: "Classroom Dashboard",
    text: "Includes changing your email or password and deleting your account",
    to: "classroom-dashboard",
  },
  // {
  //   icon: "mdi-medal-outline",
  //   title: "Elementari Subscriptions",
  //   text: "Includes changing your email or password and deleting your account",
  //   to: "premium-subscriptions",
  // },
  {
    icon: "mdi-cash",
    title: "Pricing & Billing",
    text: "Includes canceling a Elementari subscription and fixing card errors",
    to: "payments-pricing-and-billing",
  },
  {
    icon: "mdi-key-outline",
    title: "Commitment to Privacy",
    text: "Commitment to Privacy",
    to: "commitment-to-privacy",
  },
  {
    icon: "mdi-text-box-multiple-outline",
    title: "PD & Media Kits",
    text: "Includes changing your email or password and deleting your account",
    to: "pd-media-kits",
  },
];

definePageMeta({
  layout: "root",
});

const props = defineProps({
  searchValue: String,
  tab: String
});

if (import.meta.env.PROD) { var tab = toRef(props, 'tab') }

const { path } = useRoute();
const topArticles = await queryContent(path)
  .where({ _featured: true })
  .find();

const clickSearch = function () {
  
  if (props.searchValue == '') return

  const router = useRouter();

  router.push({ path: 'search', query: { query: props.searchValue } })
}

const getFeaturedArticles = function (key) {
  let a = []
  for (var i = 0; i < topArticles.length; i++) {

    if (a.length > 5) break

    if (topArticles[i]['_parent_path'] == key && topArticles[i]._featured) {
      a.push(topArticles[i])
    }
  }
  return a
}
</script>

<style>

.help-search-panel {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(113,62,255,1) 0%, #3EB5FF 100%);
  border-radius: 6px;
}

.help-cat-card {
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;
  padding: 16px !important;
  transition: box-shadow 0.15s ease-in-out;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.help-cat-card:hover {
  box-shadow: 0 0 0 1px rgba(64, 87, 109, 0.07),
    0 2px 12px rgba(53, 71, 90, 0.2);
}

.help-cat-card-header {
  margin-bottom: 8px;
  color: #0e1318;
  font-weight: 600 !important;
  text-align: inherit;
  font-size: 1rem !important;
  line-height: 1.6 !important;
}

.help-cat-card-icon-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto 16px;
}

.help-cat-card-icon {
    background-color: rgba(255, 136, 62, 0.1);
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 48px;
    border-radius:50%;
}

.help-cat-card-desc {
      -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
}

</style>
