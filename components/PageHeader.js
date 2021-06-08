const PageHeader = ({ classes, children }) => (
  <header className="uppercase py-20">
    <h2 className={`text-4xl text-bold ${classes}`}>{children}</h2>
  </header>
);

export default PageHeader;
