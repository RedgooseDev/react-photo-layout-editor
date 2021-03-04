module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/typescript',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-react-scoped-css',
  ];
  return {
    presets,
    plugins,
  };
};