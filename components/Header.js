import { useState } from "react";

import { CloseX, MenuIcon } from "./Icon";
import { TextLink } from "./Link";

const NavLinkContent = ({ pageSection }) => (
  <>
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
  </>
);

const Header = ({ pageSection }) => {
  const [showSlideNav, setShowSlideNav] = useState(false);

  const handleToggleButton = () => {
    setShowSlideNav((prevState) => !prevState);
  };

  return (
    <>
      {/* ====== DESKTOP HEADER ====== */}
      <header className="hidden mb-20 px-2 mx-auto md:block md:px-6 lg:px-0 lg:w-2/3">
        <div className="w-full mx-auto py-4 flex flex-col items-center md:flex-row md:justify-between lg:max-w-screen-lg">
          <h1 className="logo font-black text-xl lg:text-5xl">
            <TextLink href="/" classes="text-yellow-500">
              cyishere
            </TextLink>
          </h1>
          <nav>
            <ul className="nav-list flex flex-col items-center md:flex-row md:justify-end">
              <NavLinkContent pageSection={pageSection} />
            </ul>
          </nav>
        </div>
      </header>

      {/* ====== MOBILE HEADER ====== */}
      <header className="p-6 mb-10 md:hidden">
        <h1 className="text-4xl">cyishere</h1>
      </header>
      <button
        type="button"
        className={`fixed top-6 right-6 z-20 ${
          showSlideNav ? "hidden" : ""
        } md:hidden`}
        onClick={handleToggleButton}
      >
        <MenuIcon />
      </button>

      {/* ====== MOBILE NAV LINK */}
      <nav
        className={`slide-nav w-screen h-screen fixed inset-0 bg-green-50 z-10 overflow-scroll ${
          showSlideNav ? "" : "hidden"
        } md:hidden`}
      >
        <ul className="w-full h-full p10 flex flex-col justify-evenly items-center text-3xl">
          <NavLinkContent pageSection={pageSection} />
        </ul>

        <button
          type="button"
          className="absolute top-6 right-6 z-20"
          onClick={handleToggleButton}
        >
          <CloseX />
        </button>
      </nav>
    </>
  );
};

export default Header;
