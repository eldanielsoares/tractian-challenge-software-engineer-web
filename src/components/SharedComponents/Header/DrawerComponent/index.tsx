import { useSidebarDrawer } from "@/context/SidebarDrawerContext";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NavHeader } from "../NavHeader";

export const DrawerComponent: React.FC = () => {
  const { isOpen, onClose } = useSidebarDrawer();
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg={"white"} p="4">
          <DrawerCloseButton mt={"6"} />
          <DrawerHeader>
            <Image
              src="/images/tractian-blue.svg"
              alt="logo"
              width={180}
              height={60}
            />
          </DrawerHeader>

          <DrawerBody mt={4}>
            <NavHeader />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
