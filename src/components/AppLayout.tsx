import { Navigate, Outlet } from "react-router-dom";
import SliderNav from "./slide-nav";
import { Box, Flex } from "@mantine/core";
import Navbar from "./navbar";

const AppLayout = () => {
  const token = true;

  if (!token) return <Navigate  to={'/login'} />;

  return (
    <Box>
      <Flex gap={20}>
        <SliderNav />
        <div>
          <Navbar />
          <Outlet />
        </div>
      </Flex>
    </Box>
  );
};

export default AppLayout;
