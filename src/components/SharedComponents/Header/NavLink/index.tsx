import React, { ElementType, ReactNode } from "react";
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ActiveLink } from "../../ActiveLink";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  icon: ElementType;
  href: string;
  shouldMatchUrl?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  icon,
  href,
  shouldMatchUrl = false,
  ...rest
}) => {
  return (
    <ActiveLink href={href} passHref shouldMathExactHref={shouldMatchUrl}>
      <ChakraLink
        display={"flex"}
        alignItems="center"
        py={"1"}
        {...rest}
        color={["#214DB6", "#214DB6", "#214DB6", "#f5f5f5"]}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml={"2"} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
