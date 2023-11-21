"use client";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-scroll";

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
      className={`fixed top-0 left-0 right-0
      backdrop-blur-sm py-4 px-16 flex justify-end 
       ${y > 0 && "border-b-[1px] border-white-1/30"}
       `}
    >
      <p className="p-3 text-white-1 hover:text-green-2 text-2xl cursor-pointer mr-2">
        <Link
          activeStyle={{ color: "#00ADB5" }}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
      </p>
      <p className="p-3 text-white-1 hover:text-green-2 text-2xl cursor-pointer mr-2">
        <Link
          activeStyle={{ color: "#00ADB5" }}
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
        >
          Experience
        </Link>
      </p>
      <p className="p-3 text-white-1 hover:text-green-2 text-2xl cursor-pointer">
        <Link
          activeStyle={{ color: "#00ADB5" }}
          to="project"
          spy={true}
          smooth={true}
          duration={500}
        >
          Project
        </Link>
      </p>
    </nav>
  );
};

export default Navbar;
