import styled from "styled-components";

const Post = styled.article`
  line-height: 1.8;
  max-width: min(686px, 100%);
  margin-left: auto;
  margin-right: auto;

  & > * + * {
    margin-top: 1.6em;
  }

  & hr {
    margin-top: 4rem;
  }

  & a:hover {
    border-bottom: 3px solid currentColor;
    transition: border 200ms ease-in;
  }
`;

export default Post;
