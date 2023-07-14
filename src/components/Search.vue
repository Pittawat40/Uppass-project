<template>
  <v-container fluid class="container">
    <div class="head">
      <v-row>
        <v-col cols="12">
          <div class="mt-14 search">
            <v-form
              v-on:submit.prevent="handleSerach"
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="search.text"
                    :counter="10"
                    label="Search . . ."
                    variant="outlined"
                    append-inner-icon="fas fa-search"
                    id="searchBar"
                    :rules="inputRules"
                    @blur="resetValidate"
                  ></v-text-field>

                  <v-select
                    v-model="search.value"
                    :items="search.items"
                    chips
                    label="OPTION"
                  ></v-select>
                </v-col>
              </v-row>
              <v-btn
                title
                dark
                class="text-yellow me-4 mt-2"
                type="submit"
                variant="outlined"
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
            </v-form>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <v-divider></v-divider>

  <v-snackbar v-model="snackbar" :timeout="2000" color="red-darken-2">
    <p class="text-uppercase">Error data not found !!</p>
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data: () => ({
    search: {
      text: "",
      value: [],
      items: ["EBOOKS", "FREE-EBOOKS", "PAID-EBOOKS"],
    },
    inputRules: [(v) => (v && v.length > 0) || ""],
    snackbar: false,
  }),
  watch: {
    "$store.state.BookData": function (val) {
      if (val.totalItems == 0) this.snackbar = true;
      else {
        this.snackbar = false;

        setTimeout(async () => {
          await this.handleRow();
        }, 500);
      }
    },
  },
  methods: {
    async handleSerach() {
      if (this.$refs.form.validate() && this.search.text != "") {
        await this.$store.dispatch("fetchData", this.search);
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
    async handleRow() {
      let detail = document.querySelectorAll(".detail");
      for (let index = 0; index < detail.length; index++) {
        if (index < 4) detail[index].classList.add("active");
      }
    },
    resetValidate() {
      if ((!this.search.text || this.search.text == "") && (!this.search.value || this.search.value.length == 0)) {
        this.$refs.form.resetValidation();
        this.$refs.form.reset();
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
