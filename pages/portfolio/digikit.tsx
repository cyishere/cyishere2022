import type { NextPage } from "next";

import { digikit as meta } from "@/data/projects";
import { PortfolioLayout } from "@/components/Layout";
import { ExternalLink, TextLink } from "@/components/TextLink";
import Video from "@/components/Video";
import Figure from "@/components/Figure";
import styled from "styled-components";
import { MdContainer, LgContainer } from "@/components/Container";
import { QUERIES } from "@/styles/constants";
import { CodeInLine } from "@/components/MDXComponents/MDXComponents";

const digikit: NextPage = () => {
  return (
    <PortfolioLayout meta={meta} otherProjectName="Chat App">
      <Wrapper>
        <MdContainer>
          <Video
            src="https://res.cloudinary.com/cyishere/video/upload/v1623059549/cyishere/portfolio/digikit-demo-wark-through_wgbadk.mp4"
            description="digiKIT demo walk-through"
          />
          <Heading2>Project Purpose and Goal</Heading2>
          <p>
            I started to learn React.js and the whole concept of full-stack
            development in March 2020. At the end of the year, I thought it's
            time to make an app to fully embrace the knowledge that I've
            learned. An e-commerce app seems the right one.
          </p>
          <p>
            It contains the CRUD methods through the REST API. With the front
            end, I could fully practicality understand the "state management"
            concept which is quite new to me. (I used to work as a frontend
            developer 10 years ago with PHP developers in China, there was no
            such thing back then.)
          </p>
        </MdContainer>
        {/* with screenshot */}
        <TwoColumn>
          <TwoColumnContent>
            <Heading2>Web Stack and Explanation</Heading2>
            <p>
              When I was working as a screenplay writer, my main entertainment
              was reading articles on{" "}
              <ExternalLink href="https://scotch.io">scotch.io</ExternalLink> to
              learn the new tech concepts. So I'm familiar with Express REST API
              for a while, this time I "finally" got the chance to make
              something with it.
            </p>
            <p>
              To be honest, I'm still not very sure about the idea of using a
              state management tool to store the data locally, but with React
              and Redux team up, it's very convenient to maintain the shopping
              cart.
            </p>
            <p>
              The "component" development is also very new to me. Ten years ago,
              "CSS is global scoped" never bothered us, on the contrary, it's
              very helpful. So I took the opportunity to learn and implement
              styled-components in this app. This helped me understand the
              component more clearly.
            </p>
            <p>
              And the Storybook is a very helpful tool to make UI components.
            </p>
            <p>
              I use Figma for designing. (This was the first time I used Figma.)
            </p>
          </TwoColumnContent>
          <TwoColumnMedia>
            <Figure
              src="/img/portfolio/digikit/screenshot-1.jpeg"
              alt="Home page & product list page"
              width={1920}
              height={1280}
            />
          </TwoColumnMedia>
        </TwoColumn>

        {/* Screenshots Group */}
        <ThreeColumn>
          <Figure
            src="/img/portfolio/digikit/screenshot-2.jpeg"
            alt="Product page & shopping cart"
            width={1920}
            height={1280}
          />
          <Figure
            src="/img/portfolio/digikit/screenshot-3.jpeg"
            alt="Admin panel has a different template"
            width={1920}
            height={1280}
          />
          <Figure
            src="/img/portfolio/digikit/screenshot-4.jpeg"
            alt="Designed in Figma"
            width={1920}
            height={1280}
          />
        </ThreeColumn>

        <MdContainer>
          <Heading2>Problem and Thought Process</Heading2>
          <p>
            I thought it'd be smoothly making this app since I've learned tons
            of tutorials about these tech stacks. But I still bumped into the
            wall and stucked once in a while. Here are the main problems that
            bothered me.
          </p>
          <h3>The Error Handling</h3>
          <p>
            As a self-taught developer, I took the advice online that people
            recommend using axios for HTTP requests. But it gave me a lot of
            trouble.
          </p>
          <p>
            I write a middleware to deal with errors in the backend with
            messages and HTTP status code. But I found out every time axios gets
            a status code that is non-2xx, it just breaks without any messages I
            put in that error event. So I switched to{" "}
            <CodeInLine>fetch</CodeInLine>, it makes more sense to me. I wrote
            an article about{" "}
            <TextLink href="https://cyishere.dev/blog/error-handling-with-express">
              this error handling thing
            </TextLink>
            .
          </p>
          <h3>The Logic of Auth</h3>
          <p>
            By making this app I found out there are two parts about "auth", one
            is "authentication", the other is "authorization". I wrote{" "}
            <TextLink href="https://cyishere.dev/blog/auth-with-express-and-react">
              a blog post
            </TextLink>{" "}
            about the whole logic of them.
          </p>
          <h3>The Logic of Shopping Cart with Redux</h3>
          <p>
            Shopping cart on a website/webapp is like a "temporary zone", we put
            some products in there but this data will never store in the
            database. We read and write and do some calculations in this
            temporary zone to achieve the functionality of a shopping cart. So
            state management could make a temporary zone happen.
          </p>
          <h3>The Protection of Routes</h3>
          <p>
            Generally speaking for some special routes, like the user's profile
            page, we need to check whether there's a logged-in user when there
            is one we display the page, if not we redirect to a login page. So
            the logic is simple, but how do we implement this logic with React?
          </p>
          <p>
            With the help of{" "}
            <ExternalLink href="https://reactrouter.com/">
              react-router-dom
            </ExternalLink>
            , I check the user's status in a <CodeInLine>Route</CodeInLine>{" "}
            component for whether there's a login status in the app's state and
            use the <CodeInLine>if-else</CodeInLine> condition to show the right
            component or re-direct to another location.{" "}
            <ExternalLink href="https://github.com/cyishere/digikit/blob/main/frontend/src/app/ProtectedRoutes.js">
              Here's the code
            </ExternalLink>{" "}
            for route protection.
          </p>
        </MdContainer>
      </Wrapper>
    </PortfolioLayout>
  );
};

const Wrapper = styled.article`
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 3rem auto;
`;

const Heading2 = styled.h2`
  font-size: var(--font-size-xl);
`;

const TwoColumn = styled(LgContainer)`
  display: grid;
  grid-template-columns: 1fr min(500px, 100%);
  gap: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const TwoColumnContent = styled.div`
  & > p {
    margin-top: 1.6em;
  }
`;

const TwoColumnMedia = styled.div`
  display: grid;
  align-content: center;

  figure {
    margin-left: 0;
    margin-right: 0;
  }
`;

const ThreeColumn = styled.div`
  margin-top: 4rem;
  margin-left: -2rem;
  margin-right: -2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  figure {
    margin-left: 0;
    margin-right: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export default digikit;
