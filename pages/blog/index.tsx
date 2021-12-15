import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <Layout title="Blog Posts">
      <main>
        <h1>Blog Posts</h1>
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
