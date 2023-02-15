import React from "react";
import {
  Card,
  CardBody,
  HStack,
  Stack,
  Text,
  Icon,
  Divider,
  Box,
} from "@chakra-ui/react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

interface OverviewCardCompanyProps {
  assetsActive: number;
  onClick: () => void;
}

export const OverviewCardCompany: React.FC<OverviewCardCompanyProps> = ({
  assetsActive,
  onClick,
}) => {
  const BoxRound = (): JSX.Element => (
    <Box w={4} h={4} borderRadius="full" bg={"green.400"} />
  );

  return (
    <Card minH={["280px", "310px"]} onClick={onClick} cursor={"pointer"}>
      <CardBody>
        <Text fontSize={"lg"} fontWeight={"medium"} color="#214DB6" mb={4}>
          Mais sobre sua empresa
        </Text>
        <Stack my={4}>
          <HStack>
            <Icon as={FiMapPin} color={"#6f6f6f"} />
            <Text>
              Sede:{" "}
              <Text as={"span"} fontWeight="semibold">
                Rua Olinda Ellis, Campo de campo
              </Text>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiMail} color={"#6f6f6f"} />
            <Text>
              E-mail:{" "}
              <Text as={"span"} fontWeight="semibold">
                thetester@email.com
              </Text>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiPhone} color={"#6f6f6f"} />
            <Text>
              Telefone:{" "}
              <Text as={"span"} fontWeight="semibold">
                {"(21)"} 9292-9898
              </Text>
            </Text>
          </HStack>
        </Stack>
        <Divider />
        <Stack my={2}>
          <HStack>
            {BoxRound()}
            <Text>
              Status:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                Ativo
              </Text>
            </Text>
          </HStack>

          <HStack>
            {BoxRound()}
            <Text>
              Maquinas ativas:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                {assetsActive}
              </Text>
            </Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
