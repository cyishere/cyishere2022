const importAllPosts = (files) => {
  return files.keys().map((file) => ({
    slug: file.split("/")[1],
    module: files(file),
  }));
};

export const posts = importAllPosts(
  // eslint-disable-next-line no-undef
  require.context("../pages/blog/", true, /\.mdx$/)
);
