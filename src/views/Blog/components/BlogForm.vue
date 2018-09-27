<template>
  <FormContainer>
    <base-input label="Title" name="title" v-model="title" />
    <image-previewer v-if="image" :image="image" />
    <file-upload label="Image" name="image" :value="image" @change="imageHandler" />
    <base-input label="Content" name="content" v-model="content" tag="textarea" />
    <base-btn @click="$emit('create', $data)" :text="submitBtnText"/>
  </FormContainer>
</template>
<script>
import FormContainer from '@/components/FormContainer';
import FileUpload from '@/components/FileUpload';
import ImagePreviewer from '@/components/ImagePreviewer';

export default {
  props: {
    type: {
      required: true,
      type: String,
      validator: type => ['add', 'edit'].includes(type)
    },
    blog: {
      type: Object
    }
  },
  data() {
    return (
      this.blog || {
        title: 'Creamy mustard chicken',
        image: null,
        content: 'This is a great recipe!'
      }
    );
  },
  computed: {
    submitBtnText() {
      return this.type === 'add' ? 'Create' : 'Update';
    }
  },
  methods: {
    imageHandler(filelist) {
      this.image = filelist[0];
    }
  },
  components: {
    FormContainer,
    FileUpload,
    ImagePreviewer
  }
};
</script>
<style lang="scss" scoped>
</style>
