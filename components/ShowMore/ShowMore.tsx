import styled from 'styled-components';

import { QUERIES } from '@/styles/theme';

interface ShowMoreProps {
  children: React.ReactNode;
}

const ShowMore: React.FunctionComponent<ShowMoreProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ShowMore;

const Wrapper = styled.div`
  padding-right: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.desktopAndSmaller} {
    justify-content: flex-end;
  }

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
  }
`;
