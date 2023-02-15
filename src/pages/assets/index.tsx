import { container, Registry } from "@/@core/shared/container-registry";
import { ListAssetsUsecase } from "@/@core/usecases/assets/application/list-assets-usecase";
import { Assets } from "@/@core/usecases/assets/domain/entities/assets";
import { GridAssets } from "@/components/AssetsComponents/GridAssets";
import { EmptyList } from "@/components/SharedComponents/EmptyList";
import { Header } from "@/components/SharedComponents/Header";
import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

interface IListAssets {
  assets: Assets[];
}

const ListAssets: NextPage<IListAssets> = ({ assets }) => {
  const [input, setInput] = useState("");

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(input.toLowerCase())
  );
  const assetsList =
    filteredAssets.length === 0 && !input ? assets : filteredAssets;

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction="column">
        <Heading color="#214DB6" mt={6} fontWeight="semibold">
          Máquinas
        </Heading>

        <Text fontSize={"lg"}>
          Aqui estão todas as suas máquinas, clique para detalhes completos
        </Text>

        <Input
          value={input}
          maxW={"400px"}
          placeholder={"Digite o nome de uma máquina"}
          variant="outline"
          onChange={(event) => setInput(event.target.value)}
          alignSelf={"flex-end"}
          mt="10"
        />
        {filteredAssets.length === 0 && input && <EmptyList />}
        <GridAssets assets={assetsList} />
      </Flex>
    </>
  );
};

export default ListAssets;

export const getServerSideProps: GetServerSideProps = async () => {
  const useCase = container.get<ListAssetsUsecase>(Registry.ListAssetsUsecase);

  const assets = await useCase.execute();

  return {
    props: {
      assets,
    },
  };
};
