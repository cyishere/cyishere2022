import { useEffect } from "react";
import Prism from "prismjs";
import { MDXProvider } from "@mdx-js/react";

import Layout from "./Layout";
import MDXComponents from "./MDXComponents";

const PostLayout = ({ meta, children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout seoTitle={meta.title} seoDescription={meta.description}>
      <div className="w-full px-6 mx-auto md:w-4/5 md:px-0 lg:w-1/2">
        <header className="mb-20 text-center">
          <h1 className="text-5xl">{meta.title}</h1>
          <p className="text-base text-gray-400 mt-8">{meta.createdAt}</p>
          {meta.excerpt ? (
            <p className="text-2xl text-gray-500 mt-8">{meta.excerpt}</p>
          ) : null}
        </header>
        <article className="post flow mb-40">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </article>
      </div>
    </Layout>
  );
};

export default PostLayout;
