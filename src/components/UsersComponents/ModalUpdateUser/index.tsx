import React, { useEffect, useState } from "react";
import { IUser } from "@/@core/usecases/users/domain/models/users.model";
import { FiEdit } from "react-icons/fi";
import { useOverview } from "@/context/OverviewContext";
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
  Select,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Input } from "@/components/SharedComponents/Input";

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
        boxSize={"5"}
        alignSelf="flex-end"
        onClick={onOpen}
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={name}
              placeholder={"Digite o nome do usuário"}
              onChange={(event) => setName(event.target.value)}
              alignSelf={"center"}
              label={"Nome"}
            />

            <Input
              value={email}
              placeholder={"Digite o e-mail do usuário"}
              onChange={(event) => setEmail(event.target.value)}
              alignSelf={"center"}
              label={"E-mail"}
              type="email"
            />

            <>
              <Text fontSize={"md"} color="#222" mt={"1"}>
                Unidade
              </Text>
              <Select
                placeholder="Escolha a unidade"
                defaultValue={units.find((u) => u.id === user.id)?.name}
              >
                {units.map((unit, key) => (
                  <option value={unit.name} key={key}>
                    {unit.name}
                  </option>
                ))}
              </Select>
            </>
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
