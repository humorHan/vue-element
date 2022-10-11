module.exports = {
  /**
   * cva配置
   */
  cva: {
    /**
     * 开启webpack-bundle-analyzer
     * @params true | object
     * 注释：object配置参考 https://www.npmjs.com/package/webpack-bundle-analyzer
     */
    analyzer: false,
    /**
     * 开启线上sourcemap
     * 用于js反解
    */
    sourcemap: false,
    /**
     * 通过 webpack.DefinePlugin 在编译时将你代码中的变量替换为其他值或表达式
     */
    envs: {
      'window.BUILDINFO': JSON.stringify({
        hash: (process.env.GIT_COMMIT_HASH || '').substring(0, 8)
      }),
    },
    /**
     * 开始webpack编译前的钩子，用来操作webpack配置
     * @param {*} options 编译前webpack配置
     * @returns 会被当做最终的webpack配置
     */
    beforeComile(options) {
      return options;
    }
  },
  /**
   * 如下配置参考 https://webpack.docschina.org/configuration/
   */
  entry: {
    index: './src/main.js'
  },
};
