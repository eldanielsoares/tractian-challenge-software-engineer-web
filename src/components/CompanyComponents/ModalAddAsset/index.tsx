import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { Input } from "@/components/SharedComponents/Input";

interface Props {
  name: string;
  sensor: string;
}

export const ModalAddAsset: React.FC = () => {
  const [name, setName] = useState("");
  const [sensor, setSensor] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  function close() {
    onClose();
    setName("");
    setSensor("");
  }
  return (
    <>
      <Flex
        w={"5"}
        h="5"
        p={2}
        rounded={"full"}
        bg="#214DB6"
        alignItems={"center"}
        justifyContent="center"
        cursor={"pointer"}
        justifySelf="flex-end"
        onClick={onOpen}
      >
        <Icon as={FiPlus} color="#f5f5f5" />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar máquina</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={name}
              placeholder={"Digite o nome da máquina"}
              onChange={(event) => setName(event.target.value)}
              alignSelf={"center"}
              label="Nome da máquina"
            />
            <Input
              value={sensor}
              placeholder={"Digite o nome do sensor"}
              onChange={(event) => setSensor(event.target.value)}
              alignSelf={"center"}
              label={"Nome do sensor"}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={close}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={close}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
