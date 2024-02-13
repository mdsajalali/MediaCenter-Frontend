import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
      <Footer />
    </MainLayout>
  );
};

export default App;
