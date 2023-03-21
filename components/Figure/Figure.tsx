import styled from "styled-components";
import Image from "next/image";

import { QUERIES } from "@/styles/theme";

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  width,
  height,
  ...delegated
}) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...delegated}
        />
      </ImgWrapper>
      <Figcaption>{alt}</Figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  margin-left: -64px;
  margin-right: -64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    margin-left: -2rem;
    margin-right: -2rem;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  color: var(--clr-text-light);
  font-size: var(--font-size-sm);
  margin-top: 10px;
`;

export default Figure;
