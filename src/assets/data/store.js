import { reactive } from "vue";

export const store = reactive({
  decks: [],
  endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  isPageLoading: false,
});
