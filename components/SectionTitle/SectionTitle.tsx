import type { CSSProperties } from 'react';
import styled from 'styled-components';

import { font, fontSize } from '@/styles/helpers';

interface SectionTitleProps {
  position?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  position = 'left',
}) => {
  const wrapperStyles = {
    '--text-align': position,
  } as CSSProperties;

  return <Wrapper style={wrapperStyles}>{children}</Wrapper>;
};

const Wrapper = styled.h2`
  font-family: ${font('special')};
  font-size: ${fontSize('big')};
  margin-top: 0;
  text-align: var(--text-align);
`;

export default SectionTitle;
