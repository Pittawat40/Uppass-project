<template>
  <!-- =============  book list  ============= -->
  <v-row class="mt-3" v-if="checkData">
    <div class="info mt-5">
      <v-icon color="grey" left class="mx-4 mb-1">fas fa-pencil</v-icon>
      <p class="text-uppercase font-weight-bold">Books list</p>
    </div>
    <div class="line">
      <v-divider :thickness="2" class="border-opacity-100 mt-2"></v-divider>
    </div>
  </v-row>

  <v-container class="container-book">
    <v-row>
      <v-col v-for="n in val.items" :key="n" cols="12" md="3" sm="6">
        <v-card class="mx-auto my-12 detail" max-width="250">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="200"
            @click="viewDetail(n)"
            :src="
              n.volumeInfo.imageLinks && n.volumeInfo.imageLinks.smallThumbnail
                ? n.volumeInfo.imageLinks.smallThumbnail
                : 'src/assets/book.jpg'
            "
          ></v-img>

          <v-card-item @click="viewDetail(n)">
            <v-card-title class="text-uppercase">{{
              n.volumeInfo.title
            }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1 text-uppercase"
                >{{ n.volumeInfo.publishedDate }} -
                {{ n.volumeInfo.language }}</span
              >
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row class="mx-0 mt-1">
              <v-rating
                :model-value="n.volumeInfo.averageRating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">
                {{ n.volumeInfo.averageRating }} ({{ n.volumeInfo.pageCount }})
              </div>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                class="ma-2"
                variant="outlined"
                icon="fas fa-heart"
                v-bind="props"
                :color="
                  n.favorite
                    ? 'pink-lighten-2'
                    : isHovering
                    ? 'pink-lighten-2'
                    : 'grey-lighten-2'
                "
                size="x-small"
                @click="addFavorite(n, (snackbar = true))"
              ></v-btn>
            </v-hover>

            <v-btn
              color="deep-purple-lighten-2"
              variant="text"
              @click="viewDetail(n)"
            >
              View detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- =============  book list  ============= -->

  <!-- =============  best rating list  ============= -->
  <v-row class="mt-3 mb-4" v-if="checkData && checkDataBestRating">
    <div class="info mt-5">
      <v-icon color="grey" left class="mx-4 mb-1">fas fa-star</v-icon>
      <p class="text-uppercase font-weight-bold">Best Rating</p>
    </div>
    <div class="line">
      <v-divider :thickness="2" class="border-opacity-100 mt-2"></v-divider>
    </div>
  </v-row>

  <v-container class="container-book">
    <v-row>
      <v-col v-for="n in bestRating" :key="n" cols="12" md="3" sm="6">
        <v-card class="mx-auto my-12 detail" max-width="250">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="200"
            @click="viewDetail(n)"
            :src="
              n.volumeInfo.imageLinks && n.volumeInfo.imageLinks.smallThumbnail
                ? n.volumeInfo.imageLinks.smallThumbnail
                : 'src/assets/book.jpg'
            "
          ></v-img>

          <v-card-item @click="viewDetail(n)">
            <v-card-title class="text-uppercase">{{
              n.volumeInfo.title
            }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1 text-uppercase"
                >{{ n.volumeInfo.publishedDate }} -
                {{ n.volumeInfo.language }}</span
              >
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row class="mx-0 mt-1">
              <v-rating
                :model-value="n.volumeInfo.averageRating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">
                {{ n.volumeInfo.averageRating }} ({{ n.volumeInfo.pageCount }})
              </div>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                class="ma-2"
                variant="outlined"
                icon="fas fa-heart"
                v-bind="props"
                :color="
                  n.favorite
                    ? 'pink-lighten-2'
                    : isHovering
                    ? 'pink-lighten-2'
                    : 'grey-lighten-2'
                "
                size="x-small"
                @click="addFavorite(n, (snackbar = true))"
              ></v-btn>
            </v-hover>
            <v-btn
              color="deep-purple-lighten-2"
              variant="text"
              @click="viewDetail(n)"
            >
              View detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- =============  best rating list  ============= -->

  <Dialog />

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
import Dialog from "./Dialog.vue";

export default defineComponent({
  components: {
    Dialog,
  },
  props: {
    val: {
      type: Object,
      default: {},
      required: false,
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    snackbar: false,
    checkData: false,
    checkDataBestRating: false,
    data: {},
    bestRating: [],
  }),
  watch: {
    "$store.state.BookData": async function (val) {
      this.checkData = val.totalItems == 0 ? false : true;
      await this.filterData();
    },
  },
  mounted() {
    setTimeout(async () => {
      let detail = document.querySelectorAll(".detail");
      for (let index = 0; index < detail.length; index++) {
        if (index < 4) detail[index].classList.add("active");
      }
    }, 1000);
  },
  methods: {
    async filterData() {
      this.bestRating = [];
      let result = this.$store.getters.filterData;
      if (result.length > 0) {
        for (let index = 0; index < result.length; index++) {
          if (index < 4) this.bestRating.push(result[index]);
        }
      }
      this.checkDataBestRating = result.length == 0 ? false : true;
    },
    async viewDetail(item) {
      localStorage.setItem("detail", JSON.stringify(item));
      this.$store.commit("initDataDetail", item);
      this.$router.push("/detail");
    },
    async addFavorite(item) {
      let index = this.val.items.findIndex(function (e) {
        return e.id == item.id;
      });

      this.val.items[index].favorite =
        this.val.items[index].favorite == undefined
          ? true
          : !this.val.items[index].favorite;

      this.$store.commit("initFavorite", item);
    },
    handleScroll() {
      let detail = document.querySelectorAll(".detail");

      for (let index = 0; index < detail.length; index++) {
        let windowheight = window.innerHeight;
        let detailtop = detail[index].getBoundingClientRect().top;
        let detailpoint = 150;

        if (detailtop < windowheight - detailpoint) {
          detail[index].classList.add("active");
        }
      }
    },
  },
});
</script>

<style scoped>
.container-book {
  padding: 30px 0;
}
.detail {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
  transform: translateY(150px);
  opacity: 0;
  transition: all 0.8s ease;
}
.active {
  transform: translateY(0px);
  opacity: 1;
}

.info {
  width: 85%;
  margin: auto;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  white-space: nowrap;
}

.line {
  width: 80%;
  margin: auto;
}

.v-card-title {
  font-size: 0.9rem;
}

.v-card-title:hover {
  color: rgb(91, 91, 237);
}

.v-card-item,
.v-img {
  cursor: pointer;
}
</style>
