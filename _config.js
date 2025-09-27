const _config = {
  server: {
    host: 'localhost',
    port: 4444,
    open: false,
  },

  preview: {
    host: 'localhost',
    port: 3333,
    open: false,
  },

  root: './',
  srcPath: 'src',
  srcUikit: 'src/shared/uikit',
  srcCore: 'src/shared/uikit/core',
  srcTheme: 'src/shared/uikit/theme',

  legacyTargets: ['defaults', 'not IE 11'],
};

export default _config;
