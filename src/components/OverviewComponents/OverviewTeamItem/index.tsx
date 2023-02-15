import React from "react";
import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FiBriefcase } from "react-icons/fi";

interface OverviewTeamItemProps {
  name: string;
  email: string;
}

export const OverviewTeamItem: React.FC<OverviewTeamItemProps> = ({
  name,
  email,
}) => {
  return (
    <Flex w={"100%"} alignItems="center">
      <Icon as={FiBriefcase} color={"#6f6f6f"} boxSize="6" />
      <Stack ml={4} spacing={0}>
        <Text fontSize={"md"} fontWeight="medium">
          {name}
        </Text>
        <Text fontSize={"sm"}>{email}</Text>
      </Stack>
    </Flex>
  );
};
