import React from "react";
import { HeaderLogo } from "./header-logo"; // your logo component
import { HeaderNav } from "./products";    // your nav links

export function Header() {
  return (
    <header className="bg-gray-900 text-white px-3 py-2">
      <div className="flex items-center space-x-8">
        {/* Logo first */}
        <HeaderLogo />

        {/* Navigation links immediately after logo */}
        <HeaderNav />
      </div>
    </header>
  );
}
