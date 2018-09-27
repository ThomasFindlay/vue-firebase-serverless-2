<template>
  <div>

  </div>
</template>
<script>
export default {
  props: {
    author: Object,
    content: String,
    id: String,
    image: {},
    title: String
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
  created() {
    console.log('vm', this);
  }
};
</script>
<style lang="scss" scoped>
</style>
