import { Button } from "@mantine/core";
import NavbarLayout from "../../components/NavbarLayout";
import SearchInput from "../../components/search-input";
import { useDebouncedState } from "@mantine/hooks";

const Music = () => {
  const [value, setValue] = useDebouncedState("",500);

  console.log(value);
  
  
  return (
    <>
      <NavbarLayout title="Music List">
        <SearchInput value={value} setValue={setValue} />
        <Button bg={"var(--mantine-color-music-7)"}>Create Music</Button>
      </NavbarLayout>
    </>
  );
};

export default Music;
