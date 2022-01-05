import styled from "styled-components";

import { chatApp as meta } from "@/data/projects";
import { PortfolioLayout } from "@/components/Layout";
import { MdContainer } from "@/components/Container";
import { ExternalLink, TextLink } from "@/components/TextLink";
import Figure from "@/components/Figure";
import { CodeInLine } from "@/components/MDXComponents/MDXComponents";

const ChatApp = () => {
  return (
    <PortfolioLayout meta={meta} otherProjectName="digiKIT">
      <Wrapper>
        <MdContainer>
          <Figure
            src="/img/portfolio/chat-app/screenshots.gif"
            alt="Screencast: conversation in real-time"
            width={800}
            height={450}
          />
          <Heading2>Project Purpose and Goal</Heading2>
          <p>
            I started to learn React.js and the whole concept of full-stack
            development in March 2020. During that time, I found out GraphQL
            which I think is very cool and efficient. After I made{" "}
            <TextLink href="/portfolio/digikit">digiKIT</TextLink> with a REST
            API, I decided to try something with GraphQL, and a chat app popped
            into my head, because there&#39;s a &#34;real-time&#34; thing, so I
            can try out the subscription too!
          </p>

          <Heading2>Web Stack and Explanation</Heading2>
          <p>
            I use Apollo Server and Apollo Client/React because this is the
            first time I use a GraphQL API, there are tons of tutorials and
            well-written documents about Apollo which make me feel
            &#34;safe&#34;. I also watched{" "}
            <ExternalLink href="https://www.youtube.com/watch?v=LvfJ2wEpMrs&list=PLMhAeHCz8S3_VYiYxpcXtMz96vePOuOX3">
              this tutorial series on YouTube
            </ExternalLink>{" "}
            first to help me get the whole picture of this kind of app, then I
            implemented everything by myself.
          </p>
          <p>
            I found Prisma by accident, but I fell in love with it immediately.
            I had no experience with ORM before, and I&#39;ve only made{" "}
            <ExternalLink href="https://github.com/cyishere/dragonstack">
              one app with PostgreSQL
            </ExternalLink>{" "}
            following along with a tutorial. Prisma makes me interact with
            PostgreSQL happier.
          </p>
          <p>
            I like the schema and type concepts in GraphQL, it let me think more
            carefully. Same as Prisma, every time I write a Prisma schema
            it&#39;s like I&#39;m not only making a plan but also carefully
            making a plan. And comparing to mongoose, the syntax of Prisma is
            easier to understand for me (a beginner).
          </p>
          <p>
            For the frontend I use TailwindCSS for styling this time, it&#39;s
            the hot take now, I&#39;d love to take an opportunity to know it.
            After reading their document, I think it will help on &#34;faster
            developing&#34;. And turns out, I spend very little time on styling
            but the app still looks great.
          </p>

          <Heading2>Problem and Thought Process</Heading2>
          <p>
            There are very few problems in the backend, the whole Apollo
            Server/Prisma thing is super logical to understand. But a lot of
            &#34;troubles&#34; in the frontend... The React Hooks made me spent
            more time wrapping my head around it. That tutorial helps a lot.
          </p>

          <h3>Subscription</h3>
          <p>
            Another thing I want to mention is the replacing &#34;add a new
            message&#34; with the &#34;subscribe a new message&#34; concept in
            the frontend.
          </p>
          <p>
            Before I implemented the subscription, I managed how to display the
            newly sent message and update the state in the{" "}
            <CodeInLine>useMutation</CodeInLine>. But when with the
            subscription, we need to manage these with the response of{" "}
            <CodeInLine>useSubscription</CodeInLine>.
          </p>
          <p>
            I&#39;m not sure whether I described it correctly in English,{" "}
            <ExternalLink href="https://github.com/cyishere/chat-app/blob/main/client/src/components/ChatWindow/InputBox.js">
              here&#39;s the code
            </ExternalLink>
            .
          </p>

          <Heading2>Lessons Learned</Heading2>
          <p>
            Wire up Prisma in the resolver&#39;s{" "}
            <CodeInLine>context</CodeInLine> argument;
          </p>
          <p>
            Do the authentication/authorization thing in{" "}
            <CodeInLine>context</CodeInLine>;
          </p>
          <p>
            The <CodeInLine>useReducer</CodeInLine> in React has the methodology
            as the old school Redux, not{" "}
            <ExternalLink href="https://redux-toolkit.js.org/">
              the new modern one
            </ExternalLink>
            ;
          </p>
          <p>
            The <CodeInLine>context</CodeInLine> in React is very useful for
            managing the state, and not every app needs an extra state
            management tool.
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

export default ChatApp;
