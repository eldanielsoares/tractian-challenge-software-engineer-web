import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { IUnits } from "@/@core/usecases/overview/domain/models/overview.models";
import { SimpleCardUnit } from "../SimpleCardUnit";

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
      gap={"55px"}
      flexWrap={"nowrap"}
      my={6}
      justifyContent="space-between"
      alignSelf={["center", "flex-start"]}
    >
      {units.map((unit, key) => (
        <GridItem w="100%" minW={"130px"} key={key}>
          <SimpleCardUnit unit={unit} />
        </GridItem>
      ))}
    </Grid>
  );
};
