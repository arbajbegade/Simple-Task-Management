import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [showData, setShowData] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize navigate from react-router-dom

  useEffect(() => {
    const validateSession = () => {
      const user = sessionStorage.getItem("user");

      if (user) {
        setShowData(true);
      } else {
        navigate("/login");
      }
    };

    validateSession();
  }, [navigate]); // Add navigate to dependency array

  return (
    <div className="bg-gray-100 min-h-screen">
      {showData && (
        <>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div className="flex mx-3">
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <div className="my-4 mx-1 p-4 w-full bg-white rounded-md shadow-lg min-h-screen">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
