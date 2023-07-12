import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    BookData: [],
    BookDetail: {},
    BookFavorite: [],
    ApiKey: "AIzaSyAMMkXHUl8TfnybIy_MhbKpQxtU1RsoAHQ",
  },
  getters: {},
  mutations: {
    initData(state, commit) {
      let local = JSON.parse(localStorage.getItem("favorite"));
      if (local) {
        for (const l of local) {
          let index = commit.items.findIndex(function (e) {
            return e.id == l.id;
          });

          commit.items[index] = l;
          state.BookFavorite.push(l);
        }
      }
      state.BookData = commit;
    },
    initSearch(state, commit) {
      state.Search = commit;
    },
    initDataDetail(state, commit) {
      state.BookDetail = commit;
    },
    initFavorite(state, commit) {
      let index = state.BookFavorite.findIndex(function (e) {
        return e.id == commit.id;
      });

      if (index == -1) state.BookFavorite.push(commit);
      else state.BookFavorite.splice(index, 1);

      localStorage.setItem("favorite", JSON.stringify(state.BookFavorite));
      console.log(state.BookFavorite)
    },
  },
  actions: {
    async fetchData(context, commit) {
      try {
        await axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q='${commit.text}'&maxResults=12&key=${this.state.ApiKey}`
          )
          .then(async (res) => {
            if (res.status == 200) {
              store.commit("initData", res.data);
              store.commit("initSearch", commit);
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
