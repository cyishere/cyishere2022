import { ExternalLink, TextLink } from "@/components/Link";
import PortfolioLayout from "@/components/PortfolioLayout";
import Figure from "@/components/Figure";

import { chatApp as meta } from "@/utils/data";

const ChatApp = () => {
  return (
    <PortfolioLayout meta={meta} otherProjectName="digiKIT">
      <article className="w-full">
        <div className="portfolio flow px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
          <Figure
            src="/img/portfolio/chat-app/screenshots.gif"
            alt="Screencast: conversation in real-time"
          />
          <h2>Project Purpose and Goal</h2>
          <p>
            I started to learn React.js and the whole concept of full-stack
            development in March 2020. During that time, I found out GraphQL
            which I think is very cool and efficient. After I made{" "}
            <TextLink href="/portfolio/digikit">digiKIT</TextLink> with a REST
            API, I decided to try something with GraphQL, and a chat app popped
            into my head, because there's a "real-time" thing, so I can try out
            the subscription too!
          </p>

          <h2>Web Stack and Explanation</h2>
          <p>
            I use Apollo Server and Apollo Client/React because this is the
            first time I use a GraphQL API, there are tons of tutorials and
            well-written documents about Apollo which make me feel "safe". I
            also watched{" "}
            <ExternalLink href="https://www.youtube.com/watch?v=LvfJ2wEpMrs&list=PLMhAeHCz8S3_VYiYxpcXtMz96vePOuOX3">
              this tutorial series on YouTube
            </ExternalLink>{" "}
            first to help me get the whole picture of this kind of app, then I
            implemented everything by myself.
          </p>
          <p>
            I found Prisma by accident, but I fell in love with it immediately.
            I had no experience with ORM before, and I've only made{" "}
            <ExternalLink href="https://github.com/cyishere/dragonstack">
              one app with PostgreSQL
            </ExternalLink>{" "}
            following along with a tutorial. Prisma makes me interact with
            PostgreSQL happier.
          </p>
          <p>
            I like the schema and type concepts in GraphQL, it let me think more
            carefully. Same as Prisma, every time I write a Prisma schema it's
            like I'm not only making a plan but also carefully making a plan.
            And comparing to mongoose, the syntax of Prisma is easier to
            understand for me (a beginner).
          </p>
          <p>
            For the frontend I use TailwindCSS for styling this time, it's the
            hot take now, I'd love to take an opportunity to know it. After
            reading their document, I think it will help on "faster developing".
            And turns out, I spend very little time on styling but the app still
            looks great.
          </p>

          <h2>Problem and Thought Process</h2>
          <p>
            There are very few problems in the backend, the whole Apollo
            Server/Prisma thing is super logical to understand. But a lot of
            "troubles" in the frontend... The React Hooks made me spent more
            time wrapping my head around it. That tutorial helps a lot.
          </p>

          <h3>Subscription</h3>
          <p>
            Another thing I want to mention is the replacing "add a new message"
            with the "subscribe a new message" concept in the frontend.
          </p>
          <p>
            Before I implemented the subscription, I managed how to display the
            newly sent message and update the state in the{" "}
            <code>useMutation</code>. But when with the subscription, we need to
            manage these with the response of <code>useSubscription</code>.
          </p>
          <p>
            I'm not sure whether I described it correctly in English,{" "}
            <ExternalLink href="https://github.com/cyishere/chat-app/blob/main/client/src/components/ChatWindow/InputBox.js">
              here's the code
            </ExternalLink>
            .
          </p>

          <h2>Lessons Learned</h2>
          <p>
            Wire up Prisma in the resolver's <code>context</code> argument;
          </p>
          <p>
            Do the authentication/authorization thing in <code>context</code>;
          </p>
          <p>
            The <code>useReducer</code> in React has the methodology as the old
            school Redux, not{" "}
            <ExternalLink href="https://redux-toolkit.js.org/">
              the new modern one
            </ExternalLink>
            ;
          </p>
          <p>
            The <code>context</code> in React is very useful for managing the
            state, and not every app needs an extra state management tool.
          </p>
        </div>
      </article>
    </PortfolioLayout>
  );
};

export default ChatApp;
