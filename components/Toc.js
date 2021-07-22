const Toc = ({ children }) => {
  return (
    <section className="toc flex border-t-2 border-indigo-600 pt-6 pb-4 relative text-gray-400">
      <h2 className="absolute top-0 right-0 text-indigo-200 uppercase">
        Table of Content
      </h2>
      <ul>{children}</ul>
    </section>
  );
};

export default Toc;
