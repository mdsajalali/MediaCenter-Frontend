import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="mx-auto max-w-[1200px] px-4">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
