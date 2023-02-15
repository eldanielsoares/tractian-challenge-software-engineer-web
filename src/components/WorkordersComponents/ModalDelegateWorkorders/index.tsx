import React, { useEffect, useState } from "react";
import { useOverview } from "@/context/OverviewContext";
import {
  Button,
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
import { ButtonManagerUsers } from "./ButtonManagerUsers";

interface Props {
  ids: number[];
}

export const ModalDelegateWorkorders: React.FC<Props> = ({ ids }) => {
  const { overview } = useOverview();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [users, setUsers] = useState<number[]>([]);

  const filterUsers =
    overview.users && overview.users.filter((user) => !users.includes(user.id));

  const filteredSearch = filterUsers
    ? filterUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      )
    : [];

  function handleRemoveUsers(id: number) {
    const newUsers = users.filter((user) => user !== id);
    setUsers(newUsers);
  }

  function handleAddUsers(id: number) {
    setUsers((prev) => [...prev, id]);
  }

  useEffect(() => {
    setUsers(ids);
  }, [ids]);

  return (
    <>
      <Button w={"150px"} colorScheme={"blue"} onClick={onOpen}>
        Responsáveis
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gerenciar ordens</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection="column">
            {users.map((i) => (
              <ButtonManagerUsers
                key={i}
                id={i}
                onAction={() => handleRemoveUsers(i)}
                isRemove={true}
              />
            ))}

            {!isAdding ? (
              <Button
                colorScheme="blue"
                alignSelf={"flex-end"}
                onClick={() => {
                  setIsAdding(true);
                }}
              >
                Adicionar colaborador
              </Button>
            ) : (
              <>
                <Input
                  value={name}
                  maxW={["auto", "400px"]}
                  placeholder={"Digite o nome do usuário"}
                  variant="outline"
                  onChange={(event) => setName(event.target.value)}
                  alignSelf={"center"}
                  mt="4"
                />

                {(!name ? filterUsers : filteredSearch).map((i) => (
                  <ButtonManagerUsers
                    key={i.id}
                    id={i.id}
                    onAction={() => handleAddUsers(i.id)}
                    isRemove={false}
                  />
                ))}
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={() => {
                onClose();
                setName("");
                setIsAdding(false);
              }}
            >
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
