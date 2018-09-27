<template>
  <div>
    <h1>Add a blog</h1>
    <Api @createSuccess="successHandler"  collection="blogs">
      <div slot-scope="{create}">
        <blog-form @create="blog => createBlogPost(blog, create)" type="add"/>
      </div>
    </Api>
  </div>
</template>
<script>
import BlogForm from './components/BlogForm';
import Api from '@/api/Api';
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    createBlogPost(blog, create) {
      create({
        ...blog,
        author: this.user
      });
    },
    successHandler() {
      window.alert('Recipe created!');
    }
  },
  created() {
    console.log('vm', this);
  },
  components: {
    BlogForm,
    Api
  }
};
</script>
<style lang="scss" scoped>
</style>
