const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pages: {
    index: {
      entry : 'src/main.ts',
      title : 'Super Mario Odyssey: Online',
      description : 'SMOO is an unofficial multiplayer mod for Super Mario Odyssey on the Nintendo Switch.',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/globals.scss";',
      },
    },
  },
  devServer: {
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws'
    },
  },
})
