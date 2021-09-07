import styled from "styled-components";
import Image from "next/image";

import { COLORS, FONTS, SCREENS } from "styles/constants";
import { Emoji } from "../Assets";
import { ButtonLink } from "../Button";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper>
      <Text>
        <Greeting>
          <Emoji name="Vulcan Salute">🖖🏻</Emoji> Hi, there! My name is Chen
          Yang.
        </Greeting>
        <Heading>
          I make <WebMark>website</WebMark>.<br />I am a{" "}
          <FrontMark>Frontend Developer</FrontMark>.<br />I also make{" "}
          <FullMark>full-stack</FullMark> stuff.
        </Heading>
      </Text>
      <div>
        <Image src="/images/head.png" width={842} height={980} alt="Head" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (min-width: ${SCREENS.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Text = styled.div`
  text-align: center;
`;

const Greeting = styled.p`
  font-size: ${FONTS.md};
`;

const Heading = styled.h1`
  font-size: ${FONTS.xl};
  font-weight: ${FONTS.regular};
  line-height: 1.5;
`;

const Mark = styled.mark`
  font-weight: ${FONTS.semiBold};
  background: none;
`;

const WebMark = styled(Mark)`
  color: ${COLORS.purplePrimary};
`;

const FrontMark = styled(Mark)`
  color: ${COLORS.salmon};
`;

const FullMark = styled(Mark)`
  color: ${COLORS.cyan};
`;

export default Hero;
