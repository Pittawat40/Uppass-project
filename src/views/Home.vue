<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid class="container">
      <div class="head">
        <v-row>
          <v-col cols="12">
            <div class="mt-14 search">
              <v-row>
                <v-col cols="12">
                  <v-form v-on:submit.prevent="handleSerach" ref="form">
                    <v-text-field
                      v-model="search.text"
                      :counter="10"
                      label="Search . . ."
                      variant="outlined"
                      :append-inner-icon="icon"
                      :rules="inputRules"
                    ></v-text-field>

                    <v-select
                      v-model="search.value"
                      :items="search.items"
                      chips
                      label="OPTION"
                    ></v-select>
                  </v-form>
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
    <div class="info mt-5" v-if="flagCheckData">
      <v-icon color="grey" left class="mx-4 mb-1">fas fa-pencil</v-icon>
      <p class="text-uppercase font-weight-bold">Books list</p>
    </div>

    <div class="line" v-if="flagCheckData">
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

  <v-snackbar v-model="snackbar" :timeout="2000" color="red-darken-2">
    <p class="text-uppercase">Data search not found !!</p>
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
      value: [],
      items: ["EBOOKS", "FREE-EBOOKS", "PAID-EBOOKS"],
    },
    default: {
      text: "python",
    },
    icon: "fas fa-search",
    inputRules: [(v) => v.length > 0 || ""],
    snackbar: false,
    flagCheckData: true,
  }),
  computed: {
    BookData() {
      return this.$store.state.BookData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchData", this.default);
  },
  methods: {
    async handleSerach() {
      if (this.$refs.form.validate() && this.search.text != "") {
        Promise.all[
          (await this.$store.dispatch("fetchData", this.search),
          await this.checkData())
        ];
      }
    },
    async handleReset() {
      this.$refs.form.resetValidation();
      this.$refs.form.reset();
      this.search = {
        text: "",
        value: [],
        items: ["EBOOKS", "FREE-EBOOKS", "PAID-EBOOKS"],
      };
    },
    async checkData() {
      if (this.$store.state.BookData.totalItems > 0) this.flagCheckData = true
      else {
        this.flagCheckData = false
        this.snackbar = true
      }
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
  height: 350px;
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
