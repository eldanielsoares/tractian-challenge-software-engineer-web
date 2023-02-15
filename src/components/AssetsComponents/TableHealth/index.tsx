import React from "react";
import { formatDateToString } from "@/utils/formatDate";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { parseISO } from "date-fns";

interface Data {
  value: number;
  date: string;
}

interface tableHealthProps {
  data: Data[];
}

export const TableHealth: React.FC<tableHealthProps> = ({ data }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Table bg={"#fff"} borderRadius="lg" boxShadow="md" mb={5}>
      <Thead fontSize={"3xl"}>
        <Tr>
          <Th px={["4", "4", "6"]}>Peça</Th>

          {isWideVersion && <Th>Modelo</Th>}

          {isWideVersion && <Th>Ano da fabricação</Th>}

          {isWideVersion && <Th>Últ. manutenção</Th>}

          <Th>Saúde</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.slice(0, 5).map((item, key) => (
          <Tr key={key} fontSize="sm">
            <Td px={["4", "4", "6"]}>
              <Text>PC{key}</Text>
            </Td>

            {isWideVersion && (
              <Td px={["4", "4", "6"]}>
                <Text>MD{key}</Text>
              </Td>
            )}

            {isWideVersion && (
              <Td px={["4", "4", "6"]}>
                <Text>{formatDateToString(parseISO(item.date), "yyyy")}</Text>
              </Td>
            )}

            {isWideVersion && (
              <Td px={["4", "4", "6"]}>
                <Text>
                  {formatDateToString(parseISO(item.date), "dd/MM/yyyy")}
                </Text>
              </Td>
            )}

            <Td px={["4", "4", "6"]}>
              <Text>{item.value}%</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
