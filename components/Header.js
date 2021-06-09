import { TextLink } from "./Link";

const Header = ({ pageSection }) => {
  return (
    <header className="mb-20 px-2 mx-auto md:px-6 lg:px-0 lg:w-2/3">
      <div className="w-full mx-auto py-4 flex flex-col items-center md:flex-row md:justify-between lg:max-w-screen-lg">
        <h1 className="logo font-black text-xl lg:text-5xl">
          <TextLink href="/" classes="text-yellow-500">
            cyishere
          </TextLink>
        </h1>
        <nav>
          <ul className="nav-list flex flex-col items-center md:flex-row md:justify-end">
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
