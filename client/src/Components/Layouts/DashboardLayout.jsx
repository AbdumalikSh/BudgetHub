import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeMenu={activeMenu} toggleSideMenu={toggleSideMenu} />

      {user && (
        <div className="flex pt-[61px]">
          <div
            className="transition-all duration-300 ease-in-out overflow-hidden"
            style={{ width: isSideMenuOpen ? "256px" : "0px" }}
          >
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="p-5">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
