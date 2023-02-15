import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "../NavLink";
import {
  FiAirplay,
  FiBriefcase,
  FiGrid,
  FiTool,
  FiUsers,
} from "react-icons/fi";

export const NavHeader: React.FC = () => {
  return (
    <Flex
      as={"nav"}
      gap="8"
      flexDirection={["column", "column", "column", "row"]}
    >
      <NavLink icon={FiAirplay} href="/" shouldMatchUrl={true}>
        Dashboard
      </NavLink>

      <NavLink icon={FiTool} href="/assets">
        Máquinas
      </NavLink>

      <NavLink icon={FiBriefcase} href="/workorders">
        Ordens de trabalho
      </NavLink>

      <NavLink icon={FiUsers} href="/users">
        Equipe
      </NavLink>

      <NavLink icon={FiGrid} href="/company">
        Minha empresa
      </NavLink>
    </Flex>
  );
};
