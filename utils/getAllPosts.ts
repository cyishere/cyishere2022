/**
 * This file is deprecated.
 * Place here only for reference.
 */

const importAllPosts = (files: any) => {
  const sortedFiles = files.keys().sort((a: any, b: any) => {
    return (
      /**
       * There's some ts error, solution could found at here:
       * https://stackoverflow.com/questions/36560806/the-left-hand-side-of-an-arithmetic-operation-must-be-of-type-any-number-or
       */
      +new Date(files(b).meta.createdAt) - +new Date(files(a).meta.createdAt)
    );
  });

  // console.log({ sortedFiles });

  return sortedFiles.map((file: any) => ({
    slug: file.split('/')[1],
    module: files(file),
  }));
};

export const posts = importAllPosts(
  /**
   * NOTE: when using webpack 5, you _must_ match on the `./` at the beginning
   * of the filename, otherwise webpack will output duplicate filepaths
   *
   * see: https://github.com/webpack/webpack/issues/12087
   */
  require.context('../pages/blog/', true, /\.\/.*\.mdx$/)
);
