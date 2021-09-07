interface EmojiProps {
  name: string;
}

const Emoji: React.FC<EmojiProps> = ({ name, children }) => {
  return (
    <span className="px-1" role="img" aria-label={name}>
      {children}
    </span>
  );
};

export default Emoji;
