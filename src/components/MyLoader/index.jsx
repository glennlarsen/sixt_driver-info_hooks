import Loader from "react-loaders";

const MyLoader = ({ children, height }) => {
  const centerStyle = {
    height: height,
  };

  return (
    <div style={centerStyle}>
      <Loader type="ball-clip-rotate" />
      <span>{children}</span>
    </div>
  );
};

export default MyLoader;