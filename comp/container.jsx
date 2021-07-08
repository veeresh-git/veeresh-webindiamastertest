import React from "react";
import AppHeader from "./header";
import NavBar from "./navbar";

export default function Container({ children }) {
  return (
    <div>
      <title>
        Casio Authorized Online Store - Buy Casio Watches, Clocks, Calculators,
        Musical Keyboards, Pianos, Headphone and more Online at
        CasioIndiaShop.com
      </title>
      <AppHeader />
      <NavBar />
      {children}
    </div>
  );
}
