import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout() {
  const [deviceClass, setDeviceClass] = useState(
    window.innerWidth <= 768 ? "mobile" : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceClass(window.innerWidth <= 768 ? "mobile" : "desktop");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Background />

      <div className={`layout full-view column gap30 ${deviceClass}`}>
        <header>
          <Header />
        </header>

        <main id="app-main" className="full-view flex column">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
