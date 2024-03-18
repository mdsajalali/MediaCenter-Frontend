import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar h-10 w-full border-b bg-[#F9F9F9] ">
          <Navbar />
        </div>
        {/* Page content here */}
        {children}
      </div>
      {/* sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <Sidebar />
        </ul>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
