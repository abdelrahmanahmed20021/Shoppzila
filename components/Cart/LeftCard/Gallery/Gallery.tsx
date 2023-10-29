"use client";
import { EmblaOptionsType } from "embla-carousel-react";

import EmblaCarousel from "./EmblaCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Gallery() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
