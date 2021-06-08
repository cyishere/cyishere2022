import React from "react";
import { ArrowNarrowRight } from "./Icon";
import { TextLink } from "./Link";

const PostListItem = ({ post, classes }) => {
  const {
    slug,
    module: { meta },
  } = post;
  const styles = classes ? classes : "";

  return (
    <article className={`mb-12 ${styles}`}>
      <h3 className="post-title text-3xl">
        <TextLink classes="inline" href={`/blog/${slug}`} noBg={true}>
          {meta.title}{" "}
          <span className="text-green-400">
            <ArrowNarrowRight />
          </span>
        </TextLink>
      </h3>
      <p className="text-gray-400 px-1 mt-2">{meta.createdAt}</p>
    </article>
  );
};

export default PostListItem;
