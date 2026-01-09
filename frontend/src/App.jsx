import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
// const MobileLayout = lazy(() => import("./layouts/MobileLayout"));

function App() {
  // const isMobile = window.matchMedia("(max-width: 768px)").matches;
  // const Layout = isMobile ? MobileLayout : MainLayout;
  const Layout = MainLayout;

  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
