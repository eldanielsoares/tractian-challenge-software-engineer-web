import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { IUser } from "@/@core/usecases/users/domain/models/users.model";
import { IWorkOrders } from "@/@core/usecases/workorders/domain/models/workorders.models";
import { useOverview } from "@/context/OverviewContext";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
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
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={8}
      rowGap={6}
      flexWrap={"nowrap"}
      my={"10"}
      alignSelf="center"
    >
      {workorders.map((wo, key) => (
        <GridItem w="100%" minW={"130px"} key={key}>
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
