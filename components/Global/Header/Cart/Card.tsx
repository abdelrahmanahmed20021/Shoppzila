import React from "react";

import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

import { delProducts } from "@/context/futures/appendProduct";
import { appendProductType } from "@/context/types/appendProductType";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Button } from "@nextui-org/react";

export default function Card({
  src,
  name,
  color,
  size,
  count,
  id,
  price,
}: {
  src: string;
  name: string;
  size: string;
  count: number;
  color: string;
  id: string | string[];
  price: number;
}) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.appendProduct);

  const deleteProduct = () => {
    const newData: appendProductType[] = data.filter((product) => {
      if (product.id == id) {
        return product.color != color;
      }
      if (product.id != id) {
        return product.id != id;
      }
    });
    console.log(newData);

    Swal.fire({
      title: "Are you sure to delete this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffa458",
      cancelButtonColor: "#a2745c",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delProducts(newData));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="flex  my-[20px] relative overflow-hidden">
      <div className="relative  min-w-[100px] h-[100px]">
        <Image
          className=" group-hover:scale-[1.07] cursor-pointer"
          alt={"Slide-Card"}
          src={src}
          placeholder="blur"
          quality={100}
          fill
          blurDataURL={src}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "all ease-in-out .3s",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="text-[16px] w-max">{name}</div>
        <div className="text-[14px]">
          <span className="text-main-900">Color: </span>
          {color}
        </div>
        <div className="text-[14px]">
          <span className="text-main-900">Size: </span>
          {size}
        </div>
        <div className="text-[14px]">
          <span className="text-main-900">Count :</span> {count} x {price}$
        </div>
      </div>
      <Button
        className="absolute bottom-0 right-[-20px] md:right-0"
        variant="light"
        color="danger"
        onClick={deleteProduct}
      >
        <AiFillDelete size="20px" />
      </Button>
    </div>
  );
}
