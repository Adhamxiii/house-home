"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav((prev) => (prev ? false : true));
  };
  return (
    <div>
      <Nav handleToggleNav={handleToggleNav} />
      <MobileNav showNav={showNav} handleToggleNav={handleToggleNav} />
    </div>
  );
};

export default ResponsiveNav;
