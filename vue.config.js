const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pages: {
    index: {
      entry : 'src/main.ts',
      title : 'Super Mario Odyssey: Online',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/globals.scss";',
      },
    },
  },
})
