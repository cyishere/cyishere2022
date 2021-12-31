import styled from "styled-components";

import Emoji from "../Emoji";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
// import BouncingLogos from "../BouncingLogos";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        {/* <BouncingLogos /> */}
        <IntroWraper>
          <Greeting>
            <Emoji name="Vulcan Salute">🖖🏻</Emoji> Hi, My name is Chen Yang, CY
            for short.
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
  color: var(--clr-text-secondary);
`;

const Greeting = styled.p`
  font-size: var(--font-size-md);
  letter-spacing: 2px;
`;

const Callout = styled.h1`
  font-family: var(--ff-special);
  font-size: ${72 / 16}rem;
  color: var(--clr-purple-primary);
  font-weight: var(--font-weight-bold);
  margin-top: 0.5em;
`;

const Intro = styled.p`
  font-size: var(--font-size-xxxl);
  margin-top: 0.5em;
`;

const Em = styled.em`
  font-style: italic;
  font-family: var(--ff-heading);
  font-weight: var(--font-weight-medium);
`;

const Frontend = styled(Em)`
  color: var(--clr-salmon);
`;

const Fullstack = styled(Em)`
  color: var(--clr-cyan);
`;

export default Hero;
