<template>
  <div>
    <h1>Add a blog</h1>
    <Api collection="blogs">
      <div slot-scope="{create}">
        <Log :log="create"></Log>
        <blog-form @create="create" type="add"/>
      </div>
    </Api>
  </div>
</template>
<script>
import BlogForm from './components/BlogForm';
import Api from '@/api/Api';
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    BlogForm,
    Api
  }
};
</script>
<style lang="scss" scoped>
</style>
