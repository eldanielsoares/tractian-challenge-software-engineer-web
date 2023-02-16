import React, { useEffect, useState } from "react";
import { useOverview } from "@/context/OverviewContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { AiOutlineTeam } from "react-icons/ai";
import { ButtonManagerUsers } from "./ButtonManagerUsers";
import { Input } from "@/components/SharedComponents/Input";

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
      <Image
        src="/images/users.svg"
        alt="Responsáveis"
        onClick={onOpen}
        width={"60px"}
        alignSelf="flex-end"
        cursor={"pointer"}
      />
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
                variant="link"
                mt={2}
              >
                Adicionar colaborador
              </Button>
            ) : (
              <>
                {filterUsers.length > 0 && (
                  <Input
                    value={name}
                    placeholder={"Digite o nome do usuário"}
                    onChange={(event) => setName(event.target.value)}
                    alignSelf={"center"}
                    my="4"
                    label={""}
                  />
                )}

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

          <ModalFooter mt={3}>
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
