<template>
  <Layout>
    <h1 class="category-title">{{ $page.category.title }}</h1>
    <ul>
      <li v-for="{ node } in $page.category.belongsTo.edges" :key="node.id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>
    <Pager :info="$page.category.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Author ($id: String!) {
  category (id: $id) {
    title
    belongsTo {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on NewsPost {
            id
            title
            date
            excerpt
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  metaInfo () {
    return {
      title: this.$page.category.title
    }
  },
  components: {
    Pager
  }
}
</script>

<style>
  .category-title {
    margin-bottom: .8rem; 
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    margin-bottom: 20px;
  }
  ul li a h2 {
    margin-bottom: 10px;
  }
  span {
    font-size: 80%;
    padding: 0;
  }
  ul li p:first-child {
    margin-top: 3px;
  }
  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>