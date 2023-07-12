<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid class="container">
      <div class="head">
        <v-row>
          <v-col cols="12">
            <div class="mt-14 search">
              <v-row>
                <v-col cols="11">
                  <form v-on:submit.prevent="handleSerach">
                    <v-text-field
                      v-model="search.text"
                      :counter="10"
                      label="Search . . ."
                      variant="outlined"
                      :append-icon="icon"
                    ></v-text-field>

                    <!-- <v-row>
                  <v-col sm="6" md="3">
                    <v-checkbox
                      label="EBOOK"
                      type="checkbox"
                      v-modal="search.ebook"
                      @change="searchCheckbox(search.ebook, 'ebook')"
                    ></v-checkbox>
                  </v-col>
                  <v-col sm="6" md="3">
                    <v-checkbox
                      label="FREE"
                      type="checkbox"
                      v-modal="search.free"
                      @change="searchCheckbox(search.free, 'free')"
                    ></v-checkbox>
                  </v-col>
                </v-row> -->
                  </form>
                </v-col>
                <v-col cols="1">
                  <v-icon left class="mt-5">fas fa-bars-progress</v-icon>
                </v-col>
              </v-row>

              <v-btn
                title
                dark
                class="text-yellow me-4 mt-2"
                type="button"
                variant="outlined"
                @click="handleSerach"
              >
                submit
              </v-btn>

              <v-btn
                title
                dark
                class="text-yellow mt-2"
                variant="outlined"
                @click="handleReset"
              >
                clear
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-divider></v-divider>

    <div class="info mt-5">
      <v-icon color="grey" left class="mx-4 mb-1">fas fa-pencil</v-icon>
      <p class="text-uppercase font-weight-bold">Books list</p>
    </div>

    <div class="line">
      <v-divider :thickness="2" class="border-opacity-100 mt-2"></v-divider>
    </div>

    <Book :val="BookData" />

    <v-footer class="bg-grey text-center d-flex flex-column">
      <v-divider></v-divider>

      <div class="text-uppercase">
        {{ new Date().getFullYear() }} — <strong>Pittawat Samroengsin</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Book from "@/components/Book.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    Book,
  },
  data: () => ({
    search: {
      text: "",
      ebook: false,
      free: false,
    },
    icon: "fas fa-search",
  }),
  computed: {
    BookData() {
      return this.$store.state.BookData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchData", { text: "java" });
  },
  methods: {
    async handleSerach() {
      await this.$store.dispatch("fetchData", this.search);
    },
    async handleReset() {
      // this.search = {
      //   text: "",
      //   ebook: false,
      //   free: false,
      // };
      // console.log(this.search);
    },
    async searchCheckbox(val, type) {
      this.search[type] = !val;
    },
  },
});
</script>

<style scoped>
.container {
  padding: 80px 0 20px 0;
  background-image: url("/src/assets/bg.jpg");
  background-size: cover;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 300px;
  width: 100%;
  color: #fff;
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

.search {
  position: relative;
  background-color: #545454;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.search .v-btn {
  width: 10rem;
}

@media (max-width: 600px) {
  .search {
    width: 90%;
  }

  .search .v-btn {
    width: 8rem;
  }
}

@media (max-width: 400px) {
  .search .v-btn {
    width: 6rem;
  }
}
</style>
