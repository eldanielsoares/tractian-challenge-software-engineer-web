import React from "react";
import { IUnits } from "@/@core/usecases/overview/domain/models/overview.models";
import { NameIcon } from "@/components/SharedComponents/NameIcon";
import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { ModalEditAddUnit } from "../ModalEditAddUnit";

interface IUnitsProps {
  unit: IUnits;
}
export const SimpleCardUnit: React.FC<IUnitsProps> = ({ unit }) => {
  return (
    <Card maxW={["272px", "200px"]} minH={"160px"}>
      <CardBody
        py={4}
        px={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <ModalEditAddUnit name={unit.name} />
        <NameIcon name={unit.name} />
        <Stack spacing="1" p={3}>
          <Text fontSize="lg" fontWeight={"bold"} textAlign="center">
            {unit.name}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
