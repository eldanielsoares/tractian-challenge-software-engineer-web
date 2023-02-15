import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "@/components/SharedComponents/Header";
import { OverviewCardCompany } from "@/components/OverviewComponents/OverviewCardCompany";
import { OverviewColumnChartComponent } from "@/components/OverviewComponents/OverviewColumnChart";
import { OverviewPieChartComponent } from "@/components/OverviewComponents/OverviewPieChartComponent";
import { OverviewTeam } from "@/components/OverviewComponents/OverviewTeam";
import { useOverview } from "@/context/OverviewContext";

export default function Home() {
  const { push } = useRouter();
  const { overview } = useOverview();

  const assets = overview.assets ? overview.assets : [];

  const assetsActive =
    assets.filter((a) => a.status === "inOperation").length || 0;

  const users = overview.users ? overview.users : [];

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction="column">
        <Heading color="#214DB6" mt={6} mb={2} fontWeight="semibold">
          Visão geral
        </Heading>

        <Text fontSize={"md"}>
          Este é um pequeno resumo da sua empresa,
          <br />
          clique em um dos cards para ver os detalhes completos
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={8}
          rowGap={6}
          flexWrap={"wrap"}
          my={"10"}
        >
          <GridItem minW={"256px"}>
            <OverviewColumnChartComponent
              data={assets}
              titleY={"%"}
              onClick={() => push("/assets", undefined, { shallow: true })}
            />
          </GridItem>
          <GridItem minW={"256px"}>
            <OverviewPieChartComponent
              data={assets}
              onClick={() => push("/assets", undefined, { shallow: true })}
            />
          </GridItem>

          <GridItem minW={"256px"}>
            <OverviewCardCompany
              assetsActive={assetsActive}
              onClick={() => push("/company", undefined, { shallow: true })}
            />
          </GridItem>
          <GridItem minW={"256px"}>
            <OverviewTeam
              users={users}
              onClick={() => push("/users", undefined, { shallow: true })}
            />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
