import { IHealthHistory } from "@/@core/usecases/assets/domain/models/assets.model";
import { dictionary } from "@/utils/dictionary";
import {
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";
import { LineTimeDivider } from "../LineTimeDivider";

interface LineTimeComponentProps {
  healthHistory: IHealthHistory[];
}

export const LineTimeComponent: React.FC<LineTimeComponentProps> = ({
  healthHistory,
}) => {
  return (
    <Card>
      <CardBody>
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Linha do tempo
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(5, 1fr)",
          ]}
          flexWrap={"wrap"}
          px={2}
        >
          {healthHistory.map((hh, key) => (
            <GridItem
              display={"flex"}
              flexDirection={"row"}
              key={key}
              my={4}
              maxW={"180px"}
            >
              <Stack spacing={0} maxW={"100%"}>
                <Text
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                >
                  {dictionary(hh.status)}
                </Text>
                <Text textAlign={"center"} fontSize={"md"}>
                  {format(new Date(hh.timestamp), "dd/MM/yyy")}
                </Text>
              </Stack>
              {key !== healthHistory.length - 1 && <LineTimeDivider />}
            </GridItem>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
};
