import React from "react";
import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { IWorkOrders } from "@/@core/usecases/workorders/domain/models/workorders.models";
import { useOverview } from "@/context/OverviewContext";
import { Grid, GridItem } from "@chakra-ui/react";
import { CardWorkorders } from "../CardWorkorders";

interface GridWorkOrdersProps {
  workorders: IWorkOrders[];
}

export const GridWorkorders: React.FC<GridWorkOrdersProps> = ({
  workorders,
}) => {
  const { overview } = useOverview();

  const getAsset = (id: number) => {
    const findAsset = overview.assets
      ? overview.assets.find((asset) => asset.id === id)
      : ({} as IAssets);

    return findAsset;
  };

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={4}
      rowGap={6}
      flexWrap={"nowrap"}
      my={"10"}
      alignSelf="center"
    >
      {workorders.map((wo, key) => (
        <GridItem w="100%" key={key}>
          <CardWorkorders
            workorders={wo || []}
            image={getAsset(wo.id)?.image || ""}
            name={getAsset(wo.id)?.name || ""}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
