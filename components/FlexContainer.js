export const FlexCenter = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-6 md:flex-row">
      {children}
    </div>
  );
};
