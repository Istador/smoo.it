module.exports = {
  compact : true,
  plugins : [
    'transform-unicode-regexp-runtime',
  ],
  presets : [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns : 'usage',
        targets     : {
          ie      : 11,
          chrome  : 60,
          firefox : 56,
        },
      },
    ],
  ],
}
