const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
          '@layout-header-height': '20rem',
          '@layout-header-background': '#87e8de',
          '@layout-body-background': '#ffffff',
        },
      },
    },
  ],
};