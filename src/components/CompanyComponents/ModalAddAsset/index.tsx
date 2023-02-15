import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

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
      <Button variant="outline" mr={3} onClick={onOpen}>
        Atualizar Patrimônio
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar máquina</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={name}
              maxW={["auto", "400px"]}
              placeholder={"Digite o nome da máquina"}
              variant="outline"
              onChange={(event) => setName(event.target.value)}
              alignSelf={"center"}
              mt="10"
            />
            <Input
              value={sensor}
              maxW={["auto", "400px"]}
              placeholder={"Digite o nome do sensor"}
              variant="outline"
              onChange={(event) => setSensor(event.target.value)}
              alignSelf={"center"}
              mt="4"
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
