import styled from "styled-components";

const Post = styled.article`
  line-height: 1.8;
  max-width: min(686px, 100%);
  margin-left: auto;
  margin-right: auto;

  & > * + *,
  & pre[class*="language-"] {
    margin-top: 1.6em;
  }

  & hr {
    margin-top: 4rem;
  }

  & a {
    background-image: linear-gradient(
      to bottom,
      var(--clr-purple-light) 0%,
      var(--clr-purple-light) 100%
    );
    background-size: 100% 0;
    border-bottom: 1px solid var(--clr-text-light);
    transition: border 200ms ease-in, background 300ms ease;
  }

  & a:hover {
    background-size: 100% 100%;
    border-width: 3px;
    border-color: currentColor;
  }

  & p code,
  & ul code,
  & ol code {
    --bg-color: #ccc5f6;
    font-family: var(--ff-mono);
    background-color: var(--bg-color);
    color: var(--clr-purple-primary);
    border-radius: 4px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export default Post;
