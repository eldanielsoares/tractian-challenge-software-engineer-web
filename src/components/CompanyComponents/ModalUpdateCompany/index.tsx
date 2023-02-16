import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { Input } from "@/components/SharedComponents/Input";

interface Props {
  name: string;
}

export const ModalUpdateCompany: React.FC<Props> = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(name);
  }, [name]);

  return (
    <>
      <Icon
        as={FiEdit}
        color={"#d9d9d9"}
        boxSize={"5"}
        alignSelf="flex-end"
        onClick={onOpen}
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar empresa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={input}
              placeholder={"Digite o nome da Empresa"}
              onChange={(event) => setInput(event.target.value)}
              alignSelf={"center"}
              label={"Nome da empresa"}
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
