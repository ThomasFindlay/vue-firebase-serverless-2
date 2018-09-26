<template>
  <FormContainer>
    <base-input label="Title" name="title" v-model="title" />
    <image-previewer v-if="image" :image="image" />
    <file-upload label="Image" name="image" v-model="image" />
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
        title: '',
        image: null,
        content: ''
      }
    );
  },
  computed: {
    submitBtnText() {
      return this.type === 'add' ? 'Create' : 'Update';
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
