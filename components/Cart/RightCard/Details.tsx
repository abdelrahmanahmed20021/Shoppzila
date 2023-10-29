"use client";
import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { setInfo } from "@/context/futures/orderInfo";
import { useAppSelector } from "@/hooks/redux";
import { cn } from "@/libs/cn";
import { Button } from "@nextui-org/react";

export default function Details() {
  const [colorData, setColorData] = useState([
    { color: "bg-main-900", label: "Orange" },
    { color: "bg-drk-800", label: "Gray" },
    { color: "bg-success-500", label: "Green" },
    { color: "bg-danger-500", label: "Red" },
  ]);
  const [sizeData, setSizeData] = useState([
    { size: "L", label: "Large" },
    { size: "M", label: "Medium" },
    { size: "S", label: "Small" },
    { size: "XL", label: "X Large" },
    { size: "XS", label: "X Small" },
  ]);
  const dispatch = useDispatch();
  const { color, size, count } = useAppSelector((state) => state.OrderInfo);

  const sizeSetter = (element: { size: string; label: string }) => {
    dispatch(setInfo({ value: element.label, target: "size" }));
  };

  const colorSetter = (element: { color: string; label: string }) => {
    dispatch(setInfo({ value: element.label, target: "color" }));
  };

  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <div>
          <div className="font-[700] text-[16px] my-[15px]">
            Color : {color}
          </div>

          <div className="flex gap-4">
            {colorData.map((element, index) => (
              <Button
                key={index}
                onClick={() => colorSetter(element)}
                className={cn(
                  "min-w-[35px] h-[35px] text-lit-900 rounded-[35px] p-0",
                  element.color
                )}
              >
                {color == element.label && <FaCheck />}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-[700] text-[16px] my-[15px]">Size : {size}</div>
          <div className="flex gap-4">
            {sizeData.map((element, index) => (
              <Button
                key={index}
                onClick={() => sizeSetter(element)}
                className={cn(
                  "min-w-[35px] h-[35px] text-lit-900 rounded-[35px] p-0",
                  element.label == size && "bg-main-900"
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
