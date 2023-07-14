<template>
  <v-app id="home">
    <NavBar />

    <!-- =============  book detail  ============= -->
    <v-container fluid class="container">
      <div class="navigate">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <div class="detail">
        <v-row>
          <v-col cols="12" md="4" sm="6" class="img">
            <v-img :height="270" class="bg-white" :src="this.form.img"></v-img>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="title">
            <p class="text-uppercase font-weight-bold mr-2">
              {{ this.form.title }} ({{ this.form.pageCount }})
            </p>

            <v-divider class="mt-3"></v-divider>

            <v-rating
              :model-value="this.form.averageRating"
              color="amber"
              class="mt-2"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>

            <span class="mt-3 publish">
              <p class="text-uppercase mr-2">authors</p>
              : {{ this.form.authors }}
            </span>
            <span class="mt-2 publish">
              <p class="text-uppercase mr-2">type</p>
              : {{ this.form.printType }} / {{ this.form.language }}</span
            >
            <span class="mt-2 publish">
              <p class="text-uppercase mr-2">Version</p>
              : {{ this.form.contentVersion }}</span
            >
            <v-btn
              text
              class="text-green mt-5"
              variant="outlined"
              :href="this.form.previewLink"
              target="_blank"
              >Preview</v-btn
            >
            <v-divider vertical class="mx-2"></v-divider>
            <v-btn
              class="mt-5 mx-5"
              variant="outlined"
              icon="fas fa-heart"
              :color="this.form.favorite ? 'red-lighten-2' : 'grey-lighten-2'"
              size="x-small"
              @click="addFavorite(this.dataDetail, (snackbar = true))"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="10">
            <div class="description">
              <p class="text-uppercase font-weight-bold mt-4 mb-3">
                Description
              </p>
              <p class="text-left">
                {{ this.form.description }}
              </p>
              <p class="text-uppercase text-grey publish mt-4">
                Publisher : {{ this.form.publisher }} -
                {{ this.form.publishedDate }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <!-- =============  book detail  ============= -->

    <Footer />
  </v-app>

  <v-snackbar v-model="snackbar" :timeout="2000" color="success">
    <p class="text-uppercase">Successfully executed !!</p>
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Detail",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        title: "Detail",
        disabled: false,
      },
    ],
    dataDetail: {},
    form: {},
    snackbar: false,
  }),
  mounted() {
    window.scrollTo(0, 0)
    this.dataDetail =
      Object.keys(this.$store.state.BookDetail).length > 0
        ? this.$store.state.BookDetail
        : JSON.parse(localStorage.getItem("detail"));

    this.fetchDataDetail();
  },
  methods: {
    async fetchDataDetail() {
      Promise.all[
        (this.form = {
          img:
            this.dataDetail.volumeInfo.imageLinks &&
            this.dataDetail.volumeInfo.imageLinks.smallThumbnail
              ? this.dataDetail.volumeInfo.imageLinks.smallThumbnail
              : "src/assets/book.jpg",
          title: this.dataDetail.volumeInfo.title,
          averageRating: this.dataDetail.volumeInfo.averageRating,
          previewLink: this.dataDetail.volumeInfo.previewLink,
          description:
            this.dataDetail.volumeInfo.description &&
            this.dataDetail.volumeInfo.description.length > 1000
              ? `${this.dataDetail.volumeInfo.description.substring(
                  0,
                  1000
                )} . . .`
              : this.dataDetail.volumeInfo.description,
          publisher: this.dataDetail.volumeInfo.publisher,
          publishedDate: this.dataDetail.volumeInfo.publishedDate,
          pageCount: this.dataDetail.volumeInfo.pageCount,
          pageCount: this.dataDetail.volumeInfo.pageCount,
          authors: this.dataDetail.volumeInfo.authors ? this.dataDetail.volumeInfo.authors.toString() : "",
          printType: this.dataDetail.volumeInfo.printType,
          language: this.dataDetail.volumeInfo.language,
          contentVersion: this.dataDetail.volumeInfo.contentVersion,
          favorite: this.dataDetail.favorite,
        })
      ];
    },
    async addFavorite(item) {
      this.form.favorite = this.form.favorite == true ? false : true;
      this.$store.commit("initFavorite", item);
    },
  },
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.navigate {
  text-transform: uppercase;
  font-weight: bold;
  margin: 7rem 0rem 0rem 3rem;
}

.detail {
  margin-left: 3rem;
  padding: 1rem;
}

.description {
  word-wrap: break-word;
}

.publish {
  font-size: 0.8rem;
}

.detail .img {
  border: 0.1rem solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}

.title {
  margin-left: 2rem;
}

.title span {
  display: flex;
  white-space: nowrap;
}

@media (max-width: 959px) {
  .detail {
    margin: 0;
  }

  .navigate {
    margin: 7rem 0rem 0rem 0rem;
  }

  .title {
    margin: 1rem 1rem 0rem 0rem;
  }
}
</style>
