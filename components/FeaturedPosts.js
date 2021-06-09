import { posts } from "@/utils/getAllPosts";
import Emoji from "./Emoji";
import { ChevronRight } from "./Icon";
import { ButtonLink } from "./Link";
import PostListItem from "./PostListItem";

const FeaturedPosts = () => {
  return (
    <section className="w-full mx-auto mb-40 px-6 lg:w-2/3 lg:px-0">
      <header className="flex flex-row justify-between items-center uppercase py-10 lg:py-20">
        <h2 className="text-yellow-500 text-xl text-bold lg:text-4xl">
          <Emoji name="keyboard">⌨️</Emoji> Latest Posts
        </h2>
        <ButtonLink
          className="hidden"
          classes="pl-2 hover:bg-green-50"
          href="/blog"
        >
          More Posts <ChevronRight />
        </ButtonLink>
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>

      <div className="flex justify-center items-center md:hidden">
        <ButtonLink classes="pl-2 hover:bg-green-50" href="/blog">
          More Posts <ChevronRight />
        </ButtonLink>
      </div>
    </section>
  );
};

export default FeaturedPosts;
