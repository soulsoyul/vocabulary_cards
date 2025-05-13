export default {
  build: {
    minify: 'esbuild',
    esbuild: {
      keepNames: true // 변수 이름 유지
    }
  }
}
