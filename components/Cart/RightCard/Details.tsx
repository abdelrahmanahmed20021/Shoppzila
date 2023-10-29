"use client";
import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

import { cn } from "@/libs/cn";
import { Button } from "@nextui-org/react";

export default function Details() {
  const [colorData, setColorData] = useState([
    { color: "bg-main-900", label: "Orange" },
    { color: "bg-drk-800", label: "Gray" },
    { color: "bg-success-500", label: "Green" },
    { color: "bg-danger-500", label: "Red" },
  ]);
  const [activeColor, setActiveColor] = useState({ active: "", label: "" });
  const [sizeData, setSizeData] = useState([
    { size: "L", label: "Large" },
    { size: "M", label: "Medium" },
    { size: "S", label: "Small" },
    { size: "XL", label: "X Large" },
    { size: "XS", label: "X Small" },
  ]);
  const [activeSize, setActiveSize] = useState({ active: "", label: "" });
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <div>
          <div className="font-[700] text-[16px] my-[15px]">
            Color : {activeColor.label}{" "}
          </div>

          <div className="flex gap-4">
            {colorData.map((element, index) => (
              <Button
                key={index}
                onClick={() =>
                  setActiveColor((prop) => ({
                    active: element.color,
                    label: element.label,
                  }))
                }
                className={cn(
                  "min-w-[35px] h-[35px] text-lit-900 rounded-[35px] p-0",
                  element.color
                )}
              >
                {activeColor.active == element.color && <FaCheck />}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-[700] text-[16px] my-[15px]">
            Size : {activeSize.label}
          </div>
          <div className="flex gap-4">
            {sizeData.map((element, index) => (
              <Button
                key={index}
                onClick={() =>
                  setActiveSize((prop) => ({
                    active: element.size,
                    label: element.label,
                  }))
                }
                className={cn(
                  "min-w-[35px] h-[35px] text-lit-900 rounded-[35px] p-0",
                  element.size == activeSize.active && "bg-main-900"
                )}
              >
                {element.size}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
