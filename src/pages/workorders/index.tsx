import { container, Registry } from "@/@core/shared/container-registry";
import { WorkordersUsecase } from "@/@core/usecases/workorders/application/list-workorders-usecase";
import { Workorders } from "@/@core/usecases/workorders/domain/entities/workorders";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface WorkordersProps {
  workorders: Workorders[];
}

const WorkordersPage: NextPage<WorkordersProps> = ({ workorders }) => {
  return (
    <>
      <h1>Workorders</h1>
    </>
  );
};

export default WorkordersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const usecase = container.get<WorkordersUsecase>(Registry.WorkordersUsecase);
  const workorders = await usecase.execute();

  console.log(workorders);

  return {
    props: {
      workorders,
    },
  };
};
