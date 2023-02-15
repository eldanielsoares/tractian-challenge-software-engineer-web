import {
  Button,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

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
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar empresa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={input}
              maxW={["auto", "400px"]}
              placeholder={"Digite o nome da Empresa"}
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
