const PageHeader = ({ classes, children }) => (
  <header className="uppercase py-10 lg:py-20">
    <h2 className={`text-xl text-bold lg:text-4xl ${classes}`}>{children}</h2>
  </header>
);

export default PageHeader;
