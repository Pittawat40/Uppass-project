<template>
  <div class="text-center">
    <v-btn color="primary" id="dialog">
      <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
          <div class="info mt-5">
            <v-icon color="yellow" left class="mx-4 mb-1">fas fa-star</v-icon>
            <p class="text-uppercase font-weight-bold">Guide Book</p>
          </div>
          <div class="line">
            <v-divider
              :thickness="2"
              class="border-opacity-100 mt-2"
            ></v-divider>
          </div>
          <v-card-text @click="viewDetail(result)" class="body-dialog">
            <v-col cols="12">
              <v-card color="#1F7087" theme="dark">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-row>
                    <v-col cols="12" md="7">
                      <div>
                        <v-card-title class="text-h6">
                          {{ result.volumeInfo.title }}
                        </v-card-title>
                        <v-card-subtitle>
                          <span class="me-1 text-uppercase"
                            >{{ result.volumeInfo.publishedDate }} -
                            {{ result.volumeInfo.language }}</span
                          >
                        </v-card-subtitle>
                        
                        <v-card-subtitle>
                          <v-rating
                            :model-value="result.volumeInfo.averageRating"
                            color="amber"
                            class="mt-2"
                            density="compact"
                            half-increments
                            readonly
                            size="small"
                          ></v-rating>
                        </v-card-subtitle>
                      </div>
                    </v-col>
                    <v-col cols="12" md="5" class="img-dialog">
                      <v-avatar class="ma-3" size="125" rounded="0">
                        <v-img
                          :src="
                            result.volumeInfo.imageLinks &&
                            result.volumeInfo.imageLinks.smallThumbnail
                              ? result.volumeInfo.imageLinks.smallThumbnail
                              : 'src/assets/book.jpg'
                          "
                        ></v-img>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    dialog: false,
    openDialog: true,
  }),
  computed: {
    result() {
      return this.$store.getters.randomData;
    },
  },
  watch: {
    "$store.state.BookData": function (val) {
      this.openDialog = true
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 800 && this.openDialog) {
        document.querySelector("#dialog").click();
        this.openDialog = false;
      }
    },
    async viewDetail(item) {
      localStorage.setItem("detail", JSON.stringify(item));

      this.$store.commit("initDataDetail", item);
      this.$router.push("/detail");
    },
  },
});
</script>

<style scoped>
#dialog {
  display: none;
}

.body-dialog {
  cursor: pointer;
}

.line {
  width: 85%;
  margin: auto;
}

.img-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  font-size: 1rem;
  display: flex;
  white-space: nowrap;
  margin-left: 1.5rem;
}
</style>
