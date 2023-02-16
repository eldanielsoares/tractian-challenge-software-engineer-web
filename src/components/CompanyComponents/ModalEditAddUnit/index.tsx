import React, { useState } from "react";
import { NameIcon } from "@/components/SharedComponents/NameIcon";
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
  Flex,
} from "@chakra-ui/react";
import { FiEdit, FiPlus } from "react-icons/fi";
import { Input } from "@/components/SharedComponents/Input";

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
          cursor="pointer"
        />
      ) : (
        <Flex
          alignItems="center"
          cursor={"pointer"}
          justify={"center"}
          w={"24px"}
          h="24px"
          borderRadius="full"
          borderWidth={"1px"}
          borderColor="#214db6"
          onClick={onOpen}
        >
          <Icon as={FiPlus} color={"#214db6"} />
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name ? "Editar unidade" : "Nova unidade"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={input}
              placeholder={"Digite o nome da unidade"}
              onChange={(event) => setInput(event.target.value)}
              alignSelf={"center"}
              label={"Nome da unidade"}
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
