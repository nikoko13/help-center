<template>
  <v-container style="max-width: 966px;">
    <category-template
      :bread-crumbs="items"
      icon="mdi-help-circle-outline"
      categoryHeader="New to Elementari? Start here!"
      categorySubHeader="Check this section to learn how to get started with your elementari account!"
      :content="content"
    />
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "root",
});

const items = [
  {
    text: "Help Center",
    disabled: false,
    to: "/",
  },
  {
    text: "New to Elementari",
    disabled: true,
  },
];

const content = [
    {
        title: 'Getting Started',
        articles: [
            {
                title: 'How to sign up',
                to: '/article/detail-view'
            },
            {
                title: 'How to login',
                to: '/article/detail-view'
            },
            {
                title: 'Set up your profile page',
                to: '/article/detail-view'
            },
            {
                title: 'What are the minimum system requirements?',
                to: '/article/detail-view'
            },
            {
                title: 'Getting Started With Buncee In Your Classroom',
                to: '/article/detail-view'
            },
        ]
    },
    {
        title: 'Setting Up Your Classes & Adding Student Accounts',
        articles: [
             {
                title: 'How To Create Classes & Student Accounts',
                to: '/article/detail-view'
            },
             {
                title: 'How to Group Students in Your Classes',
                to: '/article/detail-view'
            },
             {
                title: 'How to read stories Created by Your Students',
                to: '/article/detail-view'
            },
        ]
    },
    {
        title: 'Elementari for Schools & Districts',
        articles: [
            {
                title: 'Getting Started on Elementari for Schools & Districts',
                to: '/article/detail-view'
            },
            {
                title: 'How to use Elementari from one account to another',
                to: '/article/detail-view'
            },
            {
                title: 'Student Accounts in Elementari for Schools & Districts',
                to: '/article/detail-view'
            },
        ]
    }
]
</script>
