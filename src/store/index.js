import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    BookData: [],
    BookDetail: {},
    ApiKey: "AIzaSyAMMkXHUl8TfnybIy_MhbKpQxtU1RsoAHQ",
  },
  getters: {
    filterData(state) {
      let data = state.BookData.items.filter((e) => {
        return e.volumeInfo.averageRating;
      });
      return data;
    },
    randomData(state) {
      const index = Math.floor(Math.random() * state.BookData.items.length);
      return state.BookData.items[index];
    },
  },
  mutations: {
    initData(state, commit) {
      let local = JSON.parse(localStorage.getItem("favorite"));
      if (local && commit.items) {
        for (const l of local) {
          let index = commit.items.findIndex(function (e) {
            return e.id == l.id;
          });
          commit.items[index] = l;
        }
      }
      state.BookData = commit;
    },
    initDataDetail(state, commit) {
      state.BookDetail = commit;
    },
    initFavorite(state, commit) {
      let data = JSON.parse(localStorage.getItem("favorite")) || [];
      if (data.length == 0) data.push(commit);
      else {
        let index = data.findIndex(function (e) {
          return e.id == commit.id;
        });

        if (index == -1) data.push(commit);
        else data.splice(index, 1);
      }

      localStorage.setItem("favorite", JSON.stringify(data));
    },
  },
  actions: {
    async fetchData(context, commit) {
      try {
        let filter = "";
        if (commit.value && commit.value.length > 0) {
          filter = `&filter=${commit.value.toString().toLowerCase()}`;
        }
        await axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q='${commit.text}'${filter}&maxResults=20&key=${this.state.ApiKey}`
          )
          .then(async (res) => {
            if (res.status == 200) {
              store.commit("initData", res.data);
            }
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } catch (err) {
        console.log(err);
        return;
      }
    },
  },
});

export default store;
