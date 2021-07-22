const { Hashtag } = require("./Icon");

const Heading2 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return (
    <h2 id={idText}>
      {children}{" "}
      <a href={`#${idText}`} className="hashtag hidden text-gray-300">
        <Hashtag />
      </a>
    </h2>
  );
};

const Hr = () => <hr className="border-double border-t-4 border-indigo-300" />;

const MDXComponents = {
  h2: Heading2,
  hr: Hr,
};

export default MDXComponents;
