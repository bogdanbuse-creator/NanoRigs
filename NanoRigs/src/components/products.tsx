

import React from "react";
import { Link } from "react-router-dom";

export function HeaderNav() {
  const links = [
    { name: "Prebuilds", href: "/prebuilds" },
    { name: "Components", href: "/components" },
    { name: "Repairs", href: "/repairs" },
    { name: "Configurator", href: "/configurator" },
  ];

  return (
    <nav className="flex space-x-30 text-[24px] font-semibold items-center justify-center flex-1">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className="relative group transition-colors duration-200"
        >
          <span className="group-hover:text-blue-500">{link.name}</span>
          <span className="absolute left-0 -top-2 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      ))}
    </nav>
  );
}
