/*
 * @Author: hanjiayi02 hanjiayi02@meituan.com
 * @Date: 2022-10-11 16:06:58
 * @LastEditors: hanjiayi02 hanjiayi02@meituan.com
 * @LastEditTime: 2022-10-11 16:27:48
 * @FilePath: /vue-element/.validate-branch-namerc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  pattern: '^(master|develop｜release|test)$|^(feat|feature|framework|refactor|(bug|hot)?fix|)\/.+$|^(sprint-.+)$',
  errorMsg: '分支名称格式错误，请输入合法的、可视化的分支名称',
}