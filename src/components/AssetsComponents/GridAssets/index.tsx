import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AssetsCard } from "../AssetsCard";

interface GridProps {
  assets: IAssets[];
}

export const GridAssets: React.FC<GridProps> = ({ assets = [] }) => {
  const { push } = useRouter();
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
      flexWrap={"wrap"}
      my={"10"}
      alignSelf="center"
    >
      {assets.map((asset, key) => (
        <GridItem w="100%" minW={"130px"} key={key}>
          <AssetsCard
            name={asset.name}
            image={asset.image}
            model={asset.model}
            status={asset.status}
            sensors={asset.sensors}
            onClick={() => push(`/assets/${asset.id}`)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
