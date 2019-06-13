<template>
  <Layout>
    <g-image immediate class="newsImage mb-4" :src="$page.post.image" />
    <div class="newsPost">
      <h1 v-html="$page.post.title" class="mb-4"/>
      <div class="meta">
        <div class="box author">
          <span class="label">Author</span>
          <g-link class="author-name" :to="$page.post.author.path">{{ $page.post.author.title }}</g-link>
        </div>
        <div class="box date">
          <span class="label">Date</span>
          <div v-text="new Date($page.post.date).toLocaleDateString()"/>
        </div>
        <div class="box time">
          <span class="label">Time</span>
          <span>{{ $page.post.timeToRead }} min read</span>
        </div>
      </div>
      <NewsContent class="mt-5" :content="$page.post.content"/>
    </div>
  </Layout>
</template>

<page-query>
query NewsPost ($path: String!) {
  post: newsPost (path: $path) {
    title
    date
    timeToRead
    content
    image
    author {
      title
      path
    }
  }
}
</page-query>

<script>
import NewsContent from '@/components/NewsContent'

export default {
  components: {
    NewsContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
