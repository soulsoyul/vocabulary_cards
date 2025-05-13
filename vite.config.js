export default {
  build: {
    minify: 'esbuild',
    esbuild: {
      keepNames: true // 변수 이름 유지
    }
  },
  optimizeDeps: {
    exclude: ['firebase'] // Firebase 의존성 최적화 제외
  }
}
