import { Box, Button, Flex, Text } from "@mantine/core";
import NavbarLayout from "../../components/NavbarLayout";
import SearchInput from "../../components/search-input";
import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import { useMusic } from "../../store/server/music/queries";
import { DataTable } from "mantine-datatable";
import CreateMusic from "./components/create-music";
import ActionButton from "../../components/action-button";
import { useDeleteMusic } from "../../store/server/music/mutation";
import ConfirmData from "../../components/confirm-button";
const Music = () => {
  const [value, setValue] = useDebouncedState("", 500);

  const { data, isPending, isError } = useMusic({
    page: "1",
    size: "10",
    search: value,
  });

  const [opened, { open, close }] = useDisclosure(false);

  const deleteMusic = useDeleteMusic();

  return (
    <>
      <NavbarLayout title="Music List">
        <SearchInput value={value} setValue={setValue} />
        <CreateMusic />
      </NavbarLayout>
      <Box pt={20} mr={20}>
        <DataTable
          fetching={isPending || isError}
          borderRadius={10}
          height={"85vh"}
          columns={[
            {
              accessor: "name",
              render: ({ name, song_image }) => {
                return (
                  <Flex align={"center"} gap={10}>
                    <img
                      src={song_image}
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                      }}
                      alt={name}
                    />
                    <Text>{name}</Text>
                  </Flex>
                );
              },
            },
            {
              accessor: "artist",
            },
            {
              accessor: "album",
            },
            {
              accessor: "release_date",
            },
            {
              accessor: "id",
              title: "",
              render: ({ id }) => {
                return (
                  <>
                    <ActionButton>
                      <Button
                        size="sm"
                        fz={12}
                        h={30}
                        w={100}
                        onClick={open}
                        radius={"md"}
                        variant="filled"
                        color="var(--mantine-color-music-8)"
                      >
                        Delete {id}
                      </Button>
                    </ActionButton>

                    <ConfirmData
                      children={
                        <Button
                          loading={deleteMusic.isPending}
                          onClick={() =>
                            deleteMusic.mutate(id, {
                              onSuccess: () => close(),
                            })
                          }
                          size="xs"
                          color="var(--mantine-color-music-7)"
                        >
                          Delete
                        </Button>
                      }
                      opened={opened}
                      close={close}
                      button={{
                        title: "Are you sure?",
                        message: "This music delete  ",
                        btn: "Delete",
                      }}
                    />
                  </>
                );
              },
            },
          ]}
          records={data?.data}
          withTableBorder
          withColumnBorders
          // highlightOnHover
          totalRecords={data?.pagination.totalPage || 0}
          page={data?.pagination.page || 1}
          recordsPerPage={10}
          onPageChange={() => {}}
        />
      </Box>
    </>
  );
};

export default Music;
