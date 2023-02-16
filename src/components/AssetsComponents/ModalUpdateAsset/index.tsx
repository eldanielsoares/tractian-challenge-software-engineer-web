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
  Icon,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { Input } from "@/components/SharedComponents/Input";

interface Props {
  name: string;
  sensor: string;
}

export const ModalUpdateAsset: React.FC<Props> = ({ name, sensor }) => {
  const [inputName, setInputName] = useState(name);
  const [inputSensor, setInputSensor] = useState(sensor);

  const { isOpen, onOpen, onClose } = useDisclosure();
  function close() {
    onClose();
    setInputName("");
    setInputSensor("");
  }
  return (
    <>
      <Icon
        as={FiEdit}
        color="#acacac"
        ml={"4"}
        onClick={onOpen}
        boxSize={"5"}
        cursor="pointer"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {name ? "Editar máquina" : "Adicionar máquina"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={inputName}
              placeholder={"Digite o nome da máquina"}
              onChange={(event) => setInputName(event.target.value)}
              alignSelf={"center"}
              label="Nome da máquina"
            />
            <Input
              value={inputSensor}
              placeholder={"Digite o nome do sensor"}
              onChange={(event) => setInputSensor(event.target.value)}
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
