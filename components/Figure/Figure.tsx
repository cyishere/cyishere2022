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
      <Image src={src} alt={alt} layout="fixed" width={width} height={height} />
      <Figcaption>{alt}</Figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Figcaption = styled.figcaption`
  color: var(--clr-text-light);
  font-size: var(--font-size-sm);
  margin-top: 10px;
`;

export default Figure;
