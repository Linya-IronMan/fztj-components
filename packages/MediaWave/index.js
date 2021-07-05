import MediaWave from "./src/index.vue"
// changelog test 
MediaWave.install = function (Vue) {
  Vue.component(MediaWave.name, MediaWave);
}

export default MediaWave;