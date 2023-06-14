import styled from 'styled-components';

interface MaxWidthWrapperProps {
  className?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <Wrapper className={className} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
`;

export default MaxWidthWrapper;
