import MediaWave from "./src/index.vue"

MediaWave.install = function (Vue) {
  Vue.component(MediaWave.name, MediaWave);
}

export default MediaWave;