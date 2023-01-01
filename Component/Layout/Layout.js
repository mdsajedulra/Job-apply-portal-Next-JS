import Footer from "../Header/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
