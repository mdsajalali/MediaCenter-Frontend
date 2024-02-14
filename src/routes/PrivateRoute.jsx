import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center my-10">
        <span className="loading loading-spinner  loading-lg  text-[#59B210]"></span>
      </div>
    );
  }
  if (!loading && !user?.email) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
