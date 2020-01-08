/**
 * 加载所有文件的方式
 * @param requireContext
 * @returns {*}
 */
let importAll = (requireContext) => requireContext.keys().forEach(requireContext);

try {
  importAll(require.context('../source', true, /\.svg$/));
} catch (e) {
  // console.error(e);
}
