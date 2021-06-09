import Emoji from "./Emoji";
import { ChevronDown } from "./Icon";
import { TextLink, ExternalLink } from "./Link";

const Intro = () => {
  return (
    <section className="w-full px-6 mx-auto leading-6 md:w-2/3 lg:w-1/2 md:px-0">
      <p className="text-xl mb-6 lg:text-3xl lg:mb-12">
        <span className="bg-green-200 p-1">
          <Emoji name="vulcan salute">🖖🏻</Emoji> Hello, my name is CY.
        </span>
        <span className="text-sm text-gray-400 block mt-4 ml-0 xl:inline xl:mt-0 xl:ml-4 lg:text-base">
          I live in Tianjin, China.{" "}
          <ExternalLink
            href="https://goo.gl/maps/FDnv79xdQD9LmuDh7"
            noBg={true}
          >
            <Emoji name="map">🗺️</Emoji>
          </ExternalLink>
        </span>
      </p>
      <p className="text-5xl text-yellow-500 mb-6 lg:mb-12 lg:text-7xl">
        I make websites.
      </p>
      <p className="text-2xl mb-6 lg:mb-12 lg:text-4xl">
        I am a self-taught <em>front-end developer</em> who also makes{" "}
        <em>full-stack</em> stuff.
      </p>
      <p className="text-xl leading-relaxed text-gray-500 mb-6 lg:text-2xl">
        I was a frontend developer from 2007-2010 and a UX designer from
        2010-2012. But in the recent 8 years, I&#39;ve been a screenplay writer
        & producer. So there&#39;re a lot of new tech stacks for me to catch up
        to re-start my career as a developer.
      </p>
      <p className="text-xl leading-relaxed text-gray-500 lg:text-2xl">
        I started to re-build my knowledge and learn React in March 2020. I got{" "}
        <TextLink href="/portfolio#fcc">4 certifications</TextLink> from
        freeCodeCamp in three months. And here&#39;re some projects I made for
        learning the amazing React.
      </p>
      <div className="flex justify-center items-center py-20 text-green-400">
        <ChevronDown />
      </div>
    </section>
  );
};

export default Intro;
