<template>
  <Layout>

    <g-link :to="item.node.path" v-for="item in $page.posts.edges" :key="item.node.id" class="news-post">

    <div class="media my-5">
      <g-image immediate :src="item.node.image" class="mr-3" alt="image" />
      <div class="media-body">
        <h5 class="mt-0">{{item.node.title}}</h5>
        <p class="text-dark">{{item.node.excerpt}}</p>
      </div>
    </div>

    </g-link>
  </Layout>
</template>

<page-query>
query News {
  posts: allNewsPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
