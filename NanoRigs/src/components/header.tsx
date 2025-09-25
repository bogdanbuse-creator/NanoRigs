// src/components/Header.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./header.css"; // Import the CSS file (ensure the filename matches the actual file, including case)

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus = [
    { name: "Products", items: ["Payments", "Billing", "Connect"] },
    { name: "Solutions", items: ["E-commerce", "SaaS", "Marketplaces"] },
    { name: "Developers", items: ["API Docs", "SDKs", "Community"] },
    { name: "Resources", items: ["Blog", "Support", "Guides"] },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        {" "}
        <img className="logo" src="/src/assets/logo/logo.png" />
      </div>

      {/* Nav */}
      <nav className="nav">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="menu-item"
            onMouseEnter={() => setOpenMenu(menu.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="menu-button">
              {menu.name} <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            {openMenu === menu.name && (
              <div className="dropdown">
                <ul>
                  {menu.items.map((item) => (
                    <li key={item} className="dropdown-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <a href="#" className="nav-link">
          Pricing
        </a>
      </nav>

      {/* Right side */}
      <div className="right-side">
        <a href="#" className="nav-link">
          Sign in →
        </a>
        <a href="#" className="contact-button">
          Contact sales →
        </a>
      </div>
    </header>
  );
}
