import React from "react";

import Gallery from "./Gallery/Gallery";
import Navigation from "./Navigation";

export default function LeftCard() {
  return (
    <div className="flex-1 w-full ">
      <Navigation />
      <Gallery />
    </div>
  );
}
