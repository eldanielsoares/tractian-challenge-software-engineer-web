import React from "react";
import { Text } from "@chakra-ui/react";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";

interface Props {
  title: string;
}

export const TextDecorated: React.FC<Props> = ({ title }) => {
  return (
    <Text
      fontSize={"md"}
      color={colors[title]}
      bg={`${colors[title]}40`}
      px={3}
      py="0.5px"
      borderRadius="lg"
      borderWidth={"1px"}
      borderColor={colors[title]}
      as="span"
      mt={1}
    >
      {dictionary(title)}
    </Text>
  );
};
