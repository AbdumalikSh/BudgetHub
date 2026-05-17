import React from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = ({ activeMenu, toggleSideMenu }) => {
  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/5 backdrop-blur-[2px] py-4 px-7 fixed top-0 left-0 right-0 z-30">
      <button className="block text-black" onClick={toggleSideMenu}>
        <HiOutlineMenu className="text-2xl" />
      </button>
      <h2 className="text-lg font-medium text-black">
        Expense Tracker - BudgetHub
      </h2>
    </div>
  );
};

export default Navbar;
