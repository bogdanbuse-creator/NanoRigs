import React, { useState } from "react";

type DropdownProps = {
  label: string; // Text for the main link
  items: string[]; // Array of dropdown items
};

export function Dropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main link */}
      <button className="hover:text-gray-300 font-medium">{label}</button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
          {items.map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
