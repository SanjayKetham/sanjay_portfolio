module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                throwIfNamespace: false, // Add this option to ignore namespace tags
              },
            },
          ],
        },
        // Other loaders...
      ],
    },
    // Other configuration options...
  };
  