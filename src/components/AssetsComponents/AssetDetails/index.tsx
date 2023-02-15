import { Assets } from "@/@core/usecases/assets/domain/entities/assets";
import { dictionary } from "@/utils/dictionary";
import {
  Card,
  CardBody,
  Flex,
  Stack,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

interface AssetDetailsProps {
  asset: Assets;
  unit: string;
}

export const AssetDetails: React.FC<AssetDetailsProps> = ({ asset, unit }) => {
  return (
    <Card mt={8}>
      <CardBody>
        <Flex direction={["column", "row"]} gap="4">
          <Image
            src={asset.image}
            alt={"Maquina imagem"}
            w={"200px"}
            h={"235px"}
            rounded="lg"
            alignSelf={["center", "flex-start"]}
            objectFit="cover"
          />
          <Stack ml={[0, 0, 0, 4]}>
            <Text
              fontSize={"2xl"}
              color="#214DB6"
              fontWeight={"semibold"}
              alignSelf={["center"]}
              mb={4}
            >
              {asset.name}
            </Text>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(6, 1fr)",
              ]}
              flexWrap="wrap"
              gap={6}
              rowGap={8}
              alignSelf="center"
              textAlign={["center", "left"]}
            >
              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Modelo:
                  <br />
                  <Text as={"span"} fontWeight="semibold">
                    {asset.model}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Sensor: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {asset.sensors.join()}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Saúde da máquina: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {asset.healthscore}%
                  </Text>
                </Text>
              </GridItem>

              {asset.specifications.maxTemp && (
                <GridItem minW={"120px"}>
                  <Text fontSize={"md"}>
                    Temperatura max: <br />
                    <Text as={"span"} fontWeight="semibold">
                      {asset.specifications.maxTemp + "°" || "-"}
                    </Text>
                  </Text>
                </GridItem>
              )}

              {asset.specifications.power && (
                <GridItem minW={"120px"}>
                  <Text fontSize={"md"}>
                    Potência: <br />
                    <Text as={"span"} fontWeight="semibold">
                      {asset.specifications.power || "-"}
                    </Text>
                  </Text>
                </GridItem>
              )}

              {asset.specifications.rpm && (
                <GridItem minW={"120px"}>
                  <Text fontSize={"md"}>
                    RPM: <br />
                    <Text as={"span"} fontWeight="semibold">
                      {asset.specifications.rpm || "-"}
                    </Text>
                  </Text>
                </GridItem>
              )}

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Total de coletas: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {asset.metrics.totalCollectsUptime.toString()}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Total de horas coletadas: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {parseInt(asset.metrics.totalUptime.toString()).toFixed(2)}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Última coleta: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {format(
                      new Date(asset.metrics.lastUptimeAt),
                      "dd/MM/yyyy HH:mm"
                    )}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Status: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {dictionary(asset.status)}
                  </Text>
                </Text>
              </GridItem>

              <GridItem minW={"120px"}>
                <Text fontSize={"md"}>
                  Unidade: <br />
                  <Text as={"span"} fontWeight="semibold">
                    {unit}
                  </Text>
                </Text>
              </GridItem>
            </Grid>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};