import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import { container, Registry } from "@/@core/shared/container-registry";
import { WorkordersUsecase } from "@/@core/usecases/workorders/application/list-workorders-usecase";
import { Workorders } from "@/@core/usecases/workorders/domain/entities/workorders";
import { Header } from "@/components/SharedComponents/Header";
import { GridWorkorders } from "@/components/WorkordersComponents/GridWorkorders";

interface WorkordersProps {
  workorders: Workorders[];
}

const WorkordersPage: NextPage<WorkordersProps> = ({ workorders }) => {
  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction={"column"}>
        <Heading color="#214DB6" mt={"64px"} mb={3} fontWeight="semibold">
          Ordens de trabalho
        </Heading>
        <GridWorkorders workorders={workorders} />
      </Flex>
    </>
  );
};

export default WorkordersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const usecase = container.get<WorkordersUsecase>(Registry.WorkordersUsecase);
  const workorders = await usecase.execute();

  return {
    props: {
      workorders,
    },
  };
};
