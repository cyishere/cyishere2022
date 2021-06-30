const importAllPosts = (files) => {
  const sortedFiles = files.keys().sort((a, b) => {
    return (
      new Date(files(b).meta.createdAt) - new Date(files(a).meta.createdAt)
    );
  });

  return sortedFiles.map((file) => ({
    slug: file.split("/")[1],
    module: files(file),
  }));
};

export const posts = importAllPosts(
  // eslint-disable-next-line no-undef
  require.context("../pages/blog/", true, /\.mdx$/)
);
