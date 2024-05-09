import { Outlet } from "react-router-dom";
import SliderNav from "./slide-nav";
import { Box, Flex } from "@mantine/core";

const AppLayout = () => {
  const token = true;

  if (!token) return "hello";

  return (
    <Box>
      <Flex gap={20}>
        <SliderNav />
        <div>
          <Outlet />
        </div>
      </Flex>
    </Box>
  );
};

export default AppLayout;
