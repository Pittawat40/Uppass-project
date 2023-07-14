<template>
  <v-app id="home">
    <NavBar />

    <!-- =============  favorite detail  ============= -->
    <v-container fluid class="container">
      <div class="navigate">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <div class="line">
        <v-divider class="mt-3"></v-divider>
      </div>

      <v-container class="container-book">
        <v-row>
          <v-col
            v-for="n in this.dataFavorite"
            :key="n"
            cols="12"
            md="3"
            sm="6"
          >
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
                  n.volumeInfo.imageLinks &&
                  n.volumeInfo.imageLinks.smallThumbnail
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
                    {{ n.volumeInfo.averageRating }} ({{
                      n.volumeInfo.pageCount
                    }})
                  </div>
                </v-row>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-actions>
                <v-btn
                  class="ma-2"
                  variant="outlined"
                  icon="fas fa-heart"
                  :color="n.favorite ? 'red-lighten-2' : 'grey-lighten-2'"
                  size="x-small"
                  @click="addFavorite(n, (snackbar = true))"
                ></v-btn>
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
    </v-container>
    <!-- =============  favorite detail  ============= -->

    <Footer />
    <Scroll />
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
import Scroll from "@/components/Scroll.vue";

export default defineComponent({
  name: "Favorite",
  components: {
    NavBar,
    Footer,
    Scroll,
  },
  data: () => ({
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        title: "Favorite",
        disabled: false,
      },
    ],
    dataFavorite: [],
    snackbar: false,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.dataFavorite = JSON.parse(localStorage.getItem("favorite"));

    setTimeout(async () => {
      let detail = document.querySelectorAll(".detail");
      for (let index = 0; index < detail.length; index++) {
        if (index < 4) detail[index].classList.add("active");
      }
    }, 500);
  },
  methods: {
    async viewDetail(item) {
      localStorage.setItem("detail", JSON.stringify(item));
      this.$store.commit("initDataDetail", item);
      this.$router.push("/detail");
    },
    async addFavorite(item) {
      let index = this.dataFavorite.findIndex(function (e) {
        return e.id == item.id;
      });
      this.dataFavorite.splice(index, 1);

      this.$store.commit("initFavorite", item);
      if (this.dataFavorite.length == 0) this.$router.push("/");
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
.container {
  padding: 20px;
}

.container-book {
  padding: 30px 0;
}

.navigate {
  text-transform: uppercase;
  font-weight: bold;
  margin: 7rem 0rem 0rem 3rem;
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

.line {
  margin: auto;
  width: 93%;
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
