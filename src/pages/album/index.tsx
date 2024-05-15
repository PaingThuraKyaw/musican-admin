import { Button } from "@mantine/core";
import NavbarLayout from "../../components/NavbarLayout";
import SearchInput from "../../components/search-input";
import { useDebouncedState } from "@mantine/hooks";

const Album = () => {
  const [value, setValue] = useDebouncedState("", 500);

  return (
    <>
      <NavbarLayout title="Album List">
        <SearchInput value={value} setValue={setValue} />
        <Button w={130} bg={"var(--mantine-color-music-7)"}>Create Album</Button>
      </NavbarLayout>
    </>
  );
};

export default Album;
