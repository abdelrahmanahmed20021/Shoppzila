import { BiSolidCart } from "react-icons/bi";

import { appendProductType } from "@/context/types/appendProductType";
import { formatTotalPrice } from "@/func/CalcPrice";
import { useAppSelector } from "@/hooks/redux";
import noProductImage from "@/public/assets/no-product.png";
import {
  Badge,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react";

import BG from "../../BG";
import Card from "./Card";

export default function Cart() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const products = useAppSelector((state) => state.appendProduct);
  return (
    <>
      <Badge
        content={products.length}
        shape="circle"
        color="warning"
        classNames={{
          badge: "text-lit-900",
        }}
      >
        <Button
          onClick={onOpen}
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
          className="text-prim-900"
        >
          <BiSolidCart size={24} />
        </Button>
      </Badge>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        closeButton={<div></div>}
      >
        <ModalContent
          style={{ margin: "0" }}
          className="right-[0] absolute top-0 h-full  rounded-none md:py-6 "
        >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Shopping Cart
              </ModalHeader>
              <ModalBody className="flex flex-col justify-between">
                <ScrollShadow className="h-[400px] md:h-[600px]">
                  {products.length > 0 &&
                    products.map(
                      (product: appendProductType, index: number) => (
                        <Card {...product} key={index} />
                      )
                    )}
                  {products.length == 0 && (
                    <div className="relative flex h-full justify-center items-center">
                      <BG src={noProductImage.src} />
                    </div>
                  )}
                </ScrollShadow>
                <div className="flex flex-col gap-[20px] px-5">
                  <div className="flex text-[1.2rem] font-[600] justify-between items-center">
                    <div>Sub Total : </div>
                    <div>
                      <span>$</span>
                      <bdi>{formatTotalPrice([64.2, 212.35, 454.32])}</bdi>
                    </div>
                  </div>
                  <Divider />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between mt-[50px]">
                <Button
                  variant="bordered"
                  size="lg"
                  onPress={onClose}
                  className="text-lit-900 rounded-md bg-prim-900 border-prim-900 hover:bg-transparent hover:text-prim-900"
                >
                  Close
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  color="warning"
                  className="text-lit-900 flex-1  rounded-md bg-main-900 hover:bg-transparent hover:text-main-900"
                  onPress={onClose}
                >
                  Checkout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
