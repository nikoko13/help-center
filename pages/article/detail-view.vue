<template>
  <v-container class="article-wrapper">
    <v-breadcrumbs :items="breadCrumbs" class="px-0">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <div class="article-content">
      <h1 class="mb-4">{{ content.header.title }}</h1>
      <div class="mb-4">
        <span v-html="content.header.subTitle" />
      </div>
      <v-alert
        border
        type="info"
        color="rgba(33,150,243,.2)"
        border-color="rgba(33,150,243,.6)"
        class="mb-8"
      >
        <div v-html="content.header.info" />
      </v-alert>

      <div v-for="(section, i) in content.body" :key="i" class="mb-8">
        <h3 class="mb-4">{{ section.title }}</h3>
        <div v-html="section.body"></div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "root",
});

const breadCrumbs = [
  {
    text: "Help Center",
    disabled: false,
    to: "/",
  },
  {
    text: "New to Elementari",
    disabled: false,
    to: "/article/start",
  },
  {
    text: "Detail view",
  },
];

const content = {
  header: {
    title: "Creating and logging into your Elementari account",
    subTitle:
      "<p>Create and download designs for any occasion. Elementari accounts are free, and you can set yours up in many ways.</p><br><p>Continue with your email address, Google, Facebook, or other methods to start using Elementari. If you already have an account, we’ll log you in. If you don’t have an account yet, we’ll sign you up instantly for free!</p>",
    info: "<p>Are you a teacher, a school, or a nonprofit organization?</p>",
  },
  body: [
    {
      title: "Creating an account with your email address",
      body: "<ol><li>From the signup page, choose the email option.</li><li>Enter the email address you’d like to use Elementari for.</li><li>Set a secure password. Learn tips on <a>protecting your account</a>.</li><li>Verify your email address by following the steps in the email we’ll send you.</li><li>Enter the confirmation code from the email you received.</li></ol><br><p>You’re all set! Log in anytime with that password and email combination.</p><br><p>Forgot your password? You can reset it anytime.</p>",
    },
    {
      title: "Creating an account with your Facebook, Google, Apple or other methods",
      body: "<p>You can use one of your other accounts (Facebook, Google, Apple, and others) to create a Elementari account.</p><br><p>From the signup or login page, choose Log in/Continue with... . You may have to log in or enter authentication codes related to your chosen account if prompted.</p><br><p>Here are the methods we currently support:</p><br><ul><li>Apple</li><li>Facebook</li><li>Google</li><li>Email</li><li>Phone or mobile number</li><li>Microsoft</li></ul><br><p>Some methods may not be available for some countries. If your preferred method isn’t an option for you, it may be coming soon!</p>",
    },
  ],
};
</script>

<style scope>
.article-wrapper {
  max-width: 966px !important;
}

.article-content ol, .article-content ul{
  list-style-position: inside;
  line-height: 1.6;
}

.article-content a {
  color: #ff883e;
  text-decoration: underline;
}
</style>
