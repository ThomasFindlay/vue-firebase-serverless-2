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
    },
    immediateFetch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fetchingData: false,
      data: null
    };
  },
  render(h) {
    return this.$scopedSlots.default({
      create: this.create,
      ...this.$data
    });
  },
  methods: {
    async fetchData(id) {
      try {
        // Set the loader on
        this.fetchingData = true;
        let snapshot;
        let data = [];
        // Retrieve data from the Firestore
        snapshot = await this.$options.db.get();
        // Loop through each snapshot and get the data as well as the doc id
        // So it can be used for routing and retrieving single record
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        this.data = data;
      } catch (err) {
        console.error(err);
        this.$emit('fetchError', err);
      } finally {
        this.fetchingData = false;
      }
    },
    async create({ image, ...data }) {
      try {
        // Unique id for the doc and folder in the storage
        const id = uuid.v1();
        // Prepare payload
        // Initially we set an image to null as it might not be added
        const payload = {
          ...data,
          image: null
        };
        // Upload an image if it was provided
        if (image) {
          payload.image = await this.uploadImage(image, id);
        }
        // Insert data
        const result = await this.$options.db.doc(id).set(payload);
        this.$emit('createSuccess');
        console.log('success');
      } catch (error) {
        console.error(error);
        this.$emit('createError', error);
      }
    },
    async uploadImage(file, id) {
      try {
        const name = `${id}-${file.name}`;
        const storage = firebaseStorage.ref(`${this.collection}/${id}/${name}`);
        const metadata = { contentType: file.type };
        const uploadedFile = await storage.put(file, metadata);
        // Get the download url for the file uploaded
        const url = await uploadedFile.ref.getDownloadURL();
        // Return the name of the file and the url
        return Promise.resolve({ name, url });
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
  created() {
    this.$options.db = firestoreDb.collection(this.collection);
    if (this.immediateFetch) this.fetchData();
  }
};
</script>
