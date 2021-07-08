import React from "react";

const NavBar = () => {
  const items = [
    "Watches",
    "Clocks",
    "Calculators",
    "Musical Instruments",
    "Label Printers & Tapes",
    "Accessories & Services",
    "Pre-Launch & Exclusive",
    "Offers",
    "others",
  ];
  return (
    <div className="menuDsk">
      <nav>
        <ul>
          {items.map((navitem) => (
            <li key={navitem}>
              <a href="#">Watches</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
