import styled from "styled-components";

import Emoji from "../Emoji";
import BouncingLogos from "../BouncingLogos";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { color, font, fontSize, fontWeight } from "@/styles/helpers";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <BouncingLogos />
        <IntroWraper>
          <Greeting>
            <Emoji name="Vulcan Salute">🖖🏻</Emoji> Hi, My name is{" "}
            <Name>Chen Yang</Name>, CY for short.
          </Greeting>

          <Callout>I make websites.</Callout>

          <Intro>
            I am a self-taught <Frontend>front-end</Frontend> developer who also
            makes <Fullstack>full-stack</Fullstack> stuff.
          </Intro>
        </IntroWraper>
      </MaxWidthContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const MaxWidthContainer = styled(MaxWidthWrapper)`
  position: relative;
  padding-bottom: 180px;
  isolation: isolate;
`;

const IntroWraper = styled.div`
  max-width: 70ch;
  margin: auto;
`;

const Greeting = styled.p`
  font-size: ${fontSize("md")};
  letter-spacing: 2px;
  color: ${color("accent.main")};
  font-weight: ${fontWeight("medium")};
`;

const Name = styled.em`
  color: ${color("accent.main")};
`;

const Callout = styled.h1`
  font-family: ${font("special")};
  font-size: ${72 / 16}rem;
  font-weight: ${fontWeight("bold")};
  margin-top: 0.5em;
`;

const Intro = styled.p`
  font-size: ${fontSize("xxl")};
  margin-top: 0.5em;
`;

const Em = styled.em`
  font-style: italic;
  font-family: ${font("heading")};
  font-weight: ${fontWeight("medium")};
`;

const Frontend = styled(Em)`
  color: ${color("primary.main")};
`;

const Fullstack = styled(Em)`
  color: ${color("secondary.main")};
`;

export default Hero;
