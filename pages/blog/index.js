import { posts } from "@/utils/getAllPosts";
import Layout from "@/components/Layout";
import PostListItem from "@/components/PostListItem";
import Emoji from "@/components/Emoji";
import PageHeader from "@/components/PageHeader";

const index = () => {
  return (
    <Layout seoTitle="Posts">
      <div className="w-full px-6 mx-auto lg:w-2/3 lg:px-0">
        <PageHeader classes="text-yellow-500">
          <Emoji name="keyboard">⌨️</Emoji> Posts
        </PageHeader>
        <main className="mb-40">
          {posts.map((post) => (
            <PostListItem
              key={post.slug}
              post={post}
              classes="border-t border-green-100 pt-12"
            />
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default index;
