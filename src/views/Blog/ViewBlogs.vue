<template>
  <div>
    <router-link to="/blog/add-blog">Add blog</router-link>
    <Api immediateFetch collection="blogs">
      <div slot-scope="{data, fetchingData}">
        <div v-if="fetchingData">Loading...</div>
        <div v-else>
          <div v-for="(blog) in data" :key="blog.id">
            <Blog v-bind="blog" />
          </div>
        </div>
      </div>
    </Api>
  </div>
</template>
<script>
import Api from '@/api/Api';
import Blog from './components/Blog';

export default {
  methods: {},
  components: {
    Api,
    Blog
  }
};
</script>
<style lang="scss" scoped>
</style>
