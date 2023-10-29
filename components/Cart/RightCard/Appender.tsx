"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import Swal from "sweetalert2";

import { setProduct } from "@/context/futures/appendProduct";
import { resetInfo, setInfo } from "@/context/futures/orderInfo";
import { useGetter } from "@/hooks/api";
import { PRODUCT_GETTER } from "@/hooks/keys";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Button } from "@nextui-org/react";

export default function Appender() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const products = useAppSelector((state) => state.appendProduct);
  const { isLoading, data } = useGetter({
    endPoint: `/api/product/${Number(id) < 7 ? id : 7}`,
    key: `${PRODUCT_GETTER}-${id}`,
  });

  const [loaderBtn, setBtnLoader] = useState(false);
  const {
    color,
    size,
    count: amount,
  } = useAppSelector((state) => state.OrderInfo);
  const dispatch = useAppDispatch();

  const countIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const countDecrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    dispatch(setInfo({ value: count, target: "count" }));
  }, [count]);

  const success = (message: string) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const warn = (message: string) => {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const appendProduct = () => {
    if (!color) {
      warn("please select color first");
      return;
    }

    if (!size) {
      warn("size is required select size first");
      return;
    }

    if (!amount) {
      warn("amount is required");
      return;
    }

    const result = products.filter((product) => product.id == id);

    if (result.length > 0) {
      warn("This product already exist");
      setCount(0);
      dispatch(resetInfo());
      return;
    }

    setBtnLoader(true);
    dispatch(
      setProduct({
        id,
        name: data[0].name,
        color: color,
        count: amount,
        size: size,
        src: data[0].src,
        price: data[0].price,
      })
    );

    setTimeout(() => {
      setBtnLoader(false);
    }, 1000);
    setTimeout(() => {
      setCount(0);
      success("Product appended successfully");
      dispatch(resetInfo());
    }, 1200);
  };

  return (
    <div className="flex gap-8">
      <div className="flex items-center w-[150px] justify-between border-[1px] gap-4">
        <Button
          onClick={countDecrease}
          variant="bordered"
          className="border-[0] min-w-[35px] h-[35px] p-0 text-[2rem]"
        >
          -
        </Button>
        <div className="font-[700]">
          {amount < 10 && amount != 0 ? `0${amount}` : amount}
        </div>
        <Button
          onClick={countIncrease}
          variant="bordered"
          className="border-[0] min-w-[35px] h-[35px] p-0 text-[1.3rem]"
        >
          +
        </Button>
      </div>
      <Button
        isLoading={loaderBtn}
        color="warning"
        variant="bordered"
        className="hover:bg-transparent w-[200px] bg-main-900 hover:text-main-900  text-lit-900"
        size="lg"
        onClick={appendProduct}
      >
        Add To Cart
      </Button>
    </div>
  );
}
