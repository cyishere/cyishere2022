import React from "react";
import Emoji from "./Emoji";
import { Icon } from "./Icon";
import { ExternalLink } from "./Link";

const Footer = () => {
  const createdAt = new Date("2021").getFullYear();
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer bg-green-100">
      <div className="w-full mx-auto px-2 py-12 flex flex-col items-center lg:w-2/3 lg:px-0 lg:flex-row lg:justify-between">
        <ul className="flex flex-col items-center mb-4 lg:flex-row lg:mb-0">
          <li className="mr-4">
            &copy; {createdAt === year ? year : `${createdAt} - ${year}`}
          </li>
          <li>
            Made with <Emoji name="coffee">☕</Emoji> &{" "}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </li>
        </ul>

        <ul className="flex flex-row justify-center items-center icons lg:justify-end">
          <li className="mr-4">
            <ExternalLink href="https://twitter.com/cyishere">
              <Icon iconUrl="/icons/twitter.svg" text="CY's Twitter" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/cyishere">
              <Icon iconUrl="/icons/github.svg" text="CY's GitHub" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
