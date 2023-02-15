import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, useBreakpointValue, Text, HStack, Icon } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useOverview } from "@/context/OverviewContext";
import { NavHeader } from "./NavHeader";
import { useSidebarDrawer } from "@/context/SidebarDrawerContext";
import { DrawerComponent } from "./DrawerComponent";

export const Header: React.FC = () => {
  const { onOpen } = useSidebarDrawer();
  const { overview } = useOverview();

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      as={"header"}
      w={"100%"}
      h={["80px", "95px"]}
      mx={"auto"}
      alignItems="center"
      bg="#214DB6"
      px={8}
      py={4}
    >
      <Flex
        w={"100%"}
        maxW={"1480px"}
        mx="auto"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <HStack spacing={3}>
          {isWideVersion && (
            <>
              <Icon as={FiMenu} color="white" boxSize={"6"} onClick={onOpen} />
              <DrawerComponent />
            </>
          )}
          <Link href={"/"}>
            <Image
              src="/images/tractian.svg"
              alt="image"
              width={180}
              height={60}
            />
            <Text mt={2} color="white">
              Olá,{" "}
              <Text as={"span"} fontWeight="semibold">
                {overview.companies ? overview.companies[0].name : ""}
              </Text>
            </Text>
          </Link>
        </HStack>
        {!isWideVersion && <NavHeader />}
      </Flex>
    </Flex>
  );
};
