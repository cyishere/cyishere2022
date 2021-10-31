import styled from "styled-components";

import { COLORS } from "@/styles/constants";
import SectionTitle from "../SectionTitle";

interface FeaturedProjectsProps {}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
  return (
    <Wrapper>
      <SectionTitle variant="khaki" position="center">
        Projects
      </SectionTitle>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--clr-yellow-light);
  box-shadow: 0px -5px 25px 1px hsl(${COLORS.textSecondary} / 0.1);
`;

export default FeaturedProjects;
