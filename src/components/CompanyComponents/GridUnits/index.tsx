import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { IUnits } from "@/@core/usecases/overview/domain/models/overview.models";
import { SimpleCardUnit } from "../SimpleCardUnit";
import { ModalEditAddUnit } from "../ModalEditAddUnit";

interface IUnitsProps {
  units: IUnits[];
}

export const GridUnits: React.FC<IUnitsProps> = ({ units = [] }) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={6}
      flexWrap={"nowrap"}
      my={6}
      justifyContent="space-between"
      alignSelf={["center", "flex-start"]}
    >
      {units.map((unit, key) => (
        <GridItem w="100%" key={key}>
          <SimpleCardUnit unit={unit} />
        </GridItem>
      ))}
    </Grid>
  );
};
