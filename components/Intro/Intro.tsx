import styled from "styled-components";
import Link from "next/link";
import { ExternalLink } from "../TextLink";
import { color, fontSize } from "@/styles/helpers";

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <p>
          I was a frontend developer from 2007-2010 and a UX designer from
          2010-2012. Then I changed my career path, and in recent years I&#39;ve
          worked as a screenwriter and producer. So there&#39;re a lot of new
          tech stacks for me to catch up in order to relaunch my career as a
          developer.
        </p>
        <p>
          I began re-building my knowledge and learning React in March 2020. In
          three months, I received{" "}
          <Link href="/portfolio/fcc">
            <a>4 certifications</a>
          </Link>{" "}
          from{" "}
          <ExternalLink href="https://www.freecodecamp.org">
            freeCodeCamp.org
          </ExternalLink>
          . And above are some projects I created whilst learning the incredible
          React.
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${color("base.200")};
  padding: 10rem 2rem;
`;

const Container = styled.article`
  font-size: ${fontSize("lg")};
  max-width: ${1000 / 16}rem;
  margin: 0 auto;

  & > *:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  & a {
    background-image: linear-gradient(
      to bottom,
      ${color("accent.main")} 0%,
      ${color("accent.dark")} 100%
    );
    background-size: 100% 0;
    border-bottom: 1px solid var(--clr-text-main);
    transition: border 200ms ease-in, background 300ms ease;
  }

  & a:hover {
    color: ${color("base.100")};
    background-size: 100% 100%;
    border-width: 3px;
    border-color: currentColor;
  }
`;

export default Intro;
