import { ActionIcon, Box, Button, Flex, Text } from "@mantine/core";
import NavbarLayout from "../../components/NavbarLayout";
import SearchInput from "../../components/search-input";
import { useDebouncedState } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import { useAlbum } from "../../store/server/album/queries";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";

const Album = () => {
  const [value, setValue] = useDebouncedState("", 500);

  const [page, setPage] = useState(1);

  const { data } = useAlbum({
    page: page.toString(),
    size: "10",
    search: value,
  });

  return (
    <>
      <NavbarLayout title="Album List">
        <SearchInput value={value} setValue={setValue} />
        <Button w={130} bg={"var(--mantine-color-music-7)"}>
          Create Album
        </Button>
      </NavbarLayout>
      <Box mr={20} >
        <DataTable
          height={"85vh"}
          columns={[
            {
              accessor: "album",
              title: "Album",
              render: ({ album, album_image }) => {
                return (
                  <Flex gap={10} align={"center"}>
                    <img
                      src={album_image}
                      alt={album}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%" }}
                    />
                    <Text>{album}</Text>
                  </Flex>
                );
              },
            },
            {
              accessor: "artist",
              title: "Artist",
              render: ({ artist }) => {
                return <Text>{artist.artist}</Text>;
              },
            },
            {
              accessor: "id",
              title: "",
              render: () => {
                return (
                  <Box>
                    <Flex justify={"center"} gap={10}>
                      <ActionIcon
                        fz={12}
                        onClick={() => {}}
                        variant="light"
                        color="var(--mantine-color-music-8)"
                      >
                        <IconTrash size={20} />
                      </ActionIcon>
                    </Flex>
                  </Box>
                );
              },
            },
          ]}
          records={data?.data || []}
          withTableBorder
          withColumnBorders
          highlightOnHover
          totalRecords={data?.pagination.totalPage || 0}
          page={data?.pagination.page || 1}
          recordsPerPage={10}
          onPageChange={(p) => {
            setPage(p);
          }}
          borderRadius={"md"}
        />
      </Box>
    </>
  );
};

export default Album;
