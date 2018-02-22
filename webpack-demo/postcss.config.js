module.exports = {
  plugins: [require("autoprefixer")],
  modules: {
      rules: [
          {
            test: /\.css$/,
            use: [
                {
                loader: "style-loader"
                }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
                }, {
                loader: "postcss-loader"
                }
            ]
        }
      ]
  }
};
