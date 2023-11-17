"use client";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [y, setY] = useState(0);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav
      className={`sticky top-0 left-0 right-0
      backdrop-blur-sm py-6 px-16 flex justify-end 
       ${y > 0 && "border-b border-gray-800"}
       `}
    >
      <p className="text-white-2 text-2xl cursor-pointer">About</p>
      <p className="text-white-2 text-2xl ml-10 cursor-pointer">Experience</p>
      <p className="text-white-2 text-2xl ml-10 cursor-pointer">Project</p>
    </nav>
  );
};

export default Navbar;
