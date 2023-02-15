import { IUser } from "@/@core/usecases/users/domain/models/users.model";
import { useOverview } from "@/context/OverviewContext";
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
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

interface Props {
  user: IUser;
}

export const ModalUpdateUser: React.FC<Props> = ({ user }) => {
  const { overview } = useOverview();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const units = overview.units ? overview.units : [];

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user.email, user.name]);
  return (
    <>
      <Icon
        as={FiEdit}
        color={"#d9d9d9"}
        boxSize={"4"}
        alignSelf="flex-end"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={name}
              maxW={["auto", "400px"]}
              placeholder={"Digite o nome do usuário"}
              variant="outline"
              onChange={(event) => setName(event.target.value)}
              alignSelf={"center"}
              mt="4"
            />

            <Input
              value={email}
              maxW={["auto", "400px"]}
              placeholder={"Digite o e-mail do usuário"}
              variant="outline"
              onChange={(event) => setEmail(event.target.value)}
              alignSelf={"center"}
              mt="4"
            />

            <Select
              placeholder="Escolha a unidade"
              defaultValue={units.find((u) => u.id === user.id)?.name}
              mt="4"
            >
              {units.map((unit, key) => (
                <option value={unit.name} key={key}>
                  {unit.name}
                </option>
              ))}
            </Select>
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
