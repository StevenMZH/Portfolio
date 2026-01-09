import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout() {
  return (
    <>
      <Background/>

      <div className="layout full-view column gap30">
        <header>
          <Header />
        </header>
        

        <main id="app-main" className="full-view flex column">
          <Outlet />
        </main>

        <Footer/>
      </div>
    </>
  );
}
