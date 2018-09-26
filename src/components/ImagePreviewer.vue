<template>
  <img class="image-preview" v-if="src" :src="src" />
</template>
<script>
export default {
  props: {
    image: {
      required: true
    }
  },
  data() {
    return {
      src: null
    };
  },
  watch: {
    image: {
      handler(file) {
        let image = file
          ? file instanceof File ? file : file.length ? file[0] : null
          : null;
        if (image) {
          this.imagePreview(image);
        } else {
          this.src = null;
        }
      },
      immediate: true
    }
  },
  methods: {
    imagePreview(file) {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          this.src = reader.result;
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }
};
</script>
<style lang="scss" scoped>
.image-preview {
  max-width: 100%;
  max-height: 500px;
  display: block;
  height: auto;
  margin: 20px auto;
}
</style>
