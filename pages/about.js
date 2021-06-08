import Emoji from "@/components/Emoji";
import Layout from "@/components/Layout";
import { ExternalLink } from "@/components/Link";
import PageHeader from "@/components/PageHeader";

const About = () => (
  <Layout seoTitle="About">
    <div className="w-full px-6 mx-auto md:w-1/2 md:px-0">
      <PageHeader classes="text-yellow-500">
        <Emoji name="Woman Technologist">👩🏻‍💻</Emoji> About Me
      </PageHeader>
      <article className="post flow mb-40">
        <p>
          <Emoji name="vulcan salute">🖖🏻</Emoji> Hello, my name is CY.
        </p>
        <p>
          I am a self-taught <em>front-end developer</em> who also makes{" "}
          <em>full-stack</em> stuff.
        </p>
        <p>
          The first time I encountered “web development” was about 15 years ago
          when I changed my blogpost blog’s background color with CSS, that’s
          amazed me a lot!{" "}
          <strong>I thought it’s very cool, the internet is the future!</strong>{" "}
          Around that time, I just graduated from college, and despite I studied
          finance I decided to change my career to web development. So I started
          to learn programming by myself, reading books, articles, and
          discussions online.
        </p>
        <p>
          I got my first development job in 2007. From 2007 to 2012, I was a
          frontend developer, most of my work was writing CSS hacks for IE6, and
          playing around with jQuery. Made a lot of templates for WordPress and
          e-commerce websites.
        </p>
        <p>
          Later something happened in my life and I switched my career path
          started a production company with my friends. I was a screenplay
          writer in the last four years (<strong>also self-taught</strong>). But
          I still love web development a lot. Developers work on code and take
          films as entertainment, I worked on films and take programming as
          entertainment. When I didn’t study films, I read articles about web
          development and follow along with the tutorials on{" "}
          <ExternalLink href="https://scotch.io">scotch.io</ExternalLink>.
        </p>
        <p>
          I spend last year catching up on the new tech stacks. Now, I&apos;m a
          fan of React, GraphQL and Prisma.
        </p>
      </article>
    </div>
  </Layout>
);

export default About;
