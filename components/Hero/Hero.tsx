import styled from "styled-components";

import { MaxWidthWrapper } from "../MaxWidthWrapper";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>home page</MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Hero;
