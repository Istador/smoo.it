const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pages: {
    index: {
      entry : 'src/main.ts',
      title : 'Super Mario Odyssey: Online',
      description : 'SMOO is an inofficial multiplayer mod for Super Mario Odyssey on the Nintendo Switch.',
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
