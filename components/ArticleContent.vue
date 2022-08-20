<template>
    <ContentDoc path="content/articles/account-settings/setting-up-account/log-in" />
</template>

<script setup>

// const { data } = await useAsyncData('home', () => queryContent('/api/_content/query?path=/account-setting/setting-up-account/log-in').findOne())
// const contentQuery = await queryContent('articles/account-settings').findOne()
// console.log(contentQuery)
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {  return queryContent().where({ _path: '/api/_content/query?path=/content/article/account-settings/setting-up-account/log-in' }).findOne()})


// const { path } = useRoute()
// const { data } = await useAsyncData(`content-${path}`, () => {  return queryContent().where({ _path: path }).only(['title']).findOne()
//     <main>  <pre>    {{ data }}  </pre></main>
</script>