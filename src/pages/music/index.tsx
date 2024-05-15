import { Box, Button, Flex, Text } from "@mantine/core";
import NavbarLayout from "../../components/NavbarLayout";
import SearchInput from "../../components/search-input";
import { useDebouncedState } from "@mantine/hooks";
import { useMusic } from "../../store/server/music/queries";
import { DataTable } from "mantine-datatable";

const Music = () => {
  const [value, setValue] = useDebouncedState("", 500);

  const { data } = useMusic({
    page: "1",
    size: "10",
    search: value,
  });


  return (
    <>
      <NavbarLayout title="Music List">
        <SearchInput value={value} setValue={setValue} />
        <Button w={130} bg={"var(--mantine-color-music-7)"}>
          Create Music
        </Button>
      </NavbarLayout>
      <Box mr={20}>
        <DataTable
        borderRadius={10}
        height={'80vh'}
          columns={[
            {
              accessor: "name",
              render: ({ name, song_image }) => {
                return (
                  <Flex align={'center'} gap={10} >
                    <img
                      src={song_image}
                      style={{
                        width: "50px",
                        height: "50px",
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
          ]}
          records={data?.data}
          withTableBorder
          withColumnBorders
          highlightOnHover
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
