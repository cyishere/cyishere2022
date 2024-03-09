import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;

  & > * + * {
    margin-top: var(--space-flow, 1.6em);
  }
`;

export const MdContainer = styled(Container)`
  max-width: 800px;
`;

export const LgContainer = styled(Container)`
  max-width: 1100px;
`;
