import Footer from "./Footer";
import Header from "./Header";
import Router from "../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
