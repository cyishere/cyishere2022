import { TextLink } from "./Link";

const Header = ({ pageSection }) => {
  return (
    <header className="mb-20 px-8 mx-auto lg:px-0 lg:w-2/3">
      <div className="lg:container mx-auto py-4 flex flex-row justify-between items-center">
        <h1 className="logo text-5xl font-black">
          <TextLink href="/" classes="text-yellow-500">
            cyishere
          </TextLink>
        </h1>
        <nav>
          <ul className="nav-list flex flex-row justify-end items-center">
            <li>
              <TextLink
                href="/"
                classes={pageSection === "" ? "active" : ""}
                noBg={true}
              >
                home
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/portfolio"
                classes={pageSection === "portfolio" ? "active" : ""}
                noBg={true}
              >
                portfolio
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/blog"
                classes={pageSection === "blog" ? "active" : ""}
                noBg={true}
              >
                blog
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/about"
                classes={pageSection === "about" ? "active" : ""}
                noBg={true}
              >
                about
              </TextLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
