import styled from "styled-components";
import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Figure: React.FC<FigureProps> = ({ src, alt, width, height }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={width}
          height={height}
        />
      </ImgWrapper>
      <Figcaption>{alt}</Figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  /* width: min(50vw, 100%); */
  margin-left: -64px;
  margin-right: -64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  color: var(--clr-text-light);
  font-size: var(--font-size-sm);
  margin-top: 10px;
`;

export default Figure;
