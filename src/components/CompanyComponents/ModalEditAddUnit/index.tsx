import React, { useState } from "react";
import { NameIcon } from "@/components/SharedComponents/NameIcon";
import {
  Button,
  Card,
  CardBody,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

interface Props {
  name?: string;
}

export const ModalEditAddUnit: React.FC<Props> = ({ name = "" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState(name);
  return (
    <>
      {name ? (
        <Icon
          as={FiEdit}
          color={"#d9d9d9"}
          boxSize={"5"}
          alignSelf="flex-end"
          onClick={onOpen}
        />
      ) : (
        <Card maxW={["272px", "200px"]} minH={"160px"}>
          <CardBody
            py={4}
            px={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            onClick={onOpen}
          >
            <NameIcon name={"+"} />
            <Stack spacing="1" p={3}>
              <Text fontSize="lg" fontWeight={"bold"} textAlign="center">
                Adicionar
              </Text>
            </Stack>
          </CardBody>
        </Card>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name ? "Editar unidade" : "Nova unidade"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={input}
              maxW={["auto", "400px"]}
              placeholder={"Digite o nome da unidade"}
              variant="outline"
              onChange={(event) => setInput(event.target.value)}
              alignSelf={"center"}
              mt="10"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
