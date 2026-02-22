import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PlayerDetail from "./pages/PlayerDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Protected Route */
function ProtectedRoute() {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

/* Layout for authenticated pages */
function Layout() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/player/:id" element={<PlayerDetail />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;