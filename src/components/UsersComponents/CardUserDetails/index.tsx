import { User } from "@/@core/usecases/users/domain/entities/user";
import {
  Card,
  CardBody,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { NameIcon } from "../../SharedComponents/NameIcon";

interface IUserProps {
  user: User;
  unit: string;
  openWorks: string;
}

export const CardUserDetails: React.FC<IUserProps> = ({
  user,
  unit,
  openWorks,
}) => {
  const isVisibleIcon = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Card maxW={"460px"} mt={"8"}>
      <CardBody>
        <HStack spacing={"4"}>
          {isVisibleIcon && <NameIcon name={user.name} />}
          <Stack>
            <Text>
              Nome:{" "}
              <Text as={"span"} fontWeight="semibold">
                {user.name}
              </Text>
            </Text>
            <Text>
              E-mail:{" "}
              <Text as={"span"} fontWeight="semibold">
                {user.email}
              </Text>
            </Text>
            <Text>
              Unidade:{" "}
              <Text as={"span"} fontWeight="semibold">
                {unit}
              </Text>
            </Text>
            <Text>
              Trabalhos vinculados:{" "}
              <Text as={"span"} fontWeight="semibold">
                {openWorks}
              </Text>
            </Text>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
};