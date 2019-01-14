const ExtractTextPlugin = require("extract-text-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      // この設定は.jsファイルと.vueファイルの<script>ブロック両方に適用される
      {
        test: /\.vue$/,
        loader: "vue-loader"
        
      },
      // この設定は.cssファイルと.vueファイルの<style>ブロック両方に適用される
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
          ]
      }
    ]
  },

  plugins: [
    // vue-loaderv15以降必須
    new VueLoaderPlugin()
    
  ],
  
}