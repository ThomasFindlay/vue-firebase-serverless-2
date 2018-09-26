<script>
import firebase from 'firebase/app';
import 'firebase/storage';
import { uuid } from 'vue-uuid';
import { firestoreDb, firebaseStorage } from '@/firebase';

export default {
  props: {
    collection: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  render(h) {
    return this.$scopedSlots.default({
      create: this.create
    });
  },
  methods: {
    async create(image, ...data) {
      console.log('create', image, data);
      // TODO check why the heck it does not work correctly
      // Should get an image file from the filelist, instead is null
      let imageFile = image
        ? image instanceof File ? image : image.length ? image[0] : null
        : null;

      console.log('image file', imageFile);
      try {
        const id = uuid.v1();
        const payload = {
          ...data,
          image: null
        };
        if (image) {
          payload.image = await this.uploadImage(imageFile, id);
        }
        const result = await this.$options.db.doc(id).set(payload);
        console.log('result', result);
      } catch (error) {
        console.error(error);
        window.alert('There was an error while inserting the data.');
      }
    },
    async uploadImage(file, id) {
      console.log('image file', file, id);
      try {
        const name = `${id}-${file.name}`;
        const storage = firebaseStorage.ref(`${this.collection}/${id}/${name}`);
        const metadata = { contentType: file.type };
        const uploadedFile = await storage.put(file, metadata);
        const url = await uploadedFile.ref.getDownloadURL();
        return Promise.resolve({ name, url });
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
  created() {
    this.$options.db = firestoreDb.collection(this.collection);
  }
};
</script>
