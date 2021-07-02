import SearchSelect from "./src/index.vue";

SearchSelect.install = function (Vue) {
  Vue.component(SearchSelect.name, SearchSelect);
}

export default SearchSelect