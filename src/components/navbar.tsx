import { Box, Flex, Text, Title } from "@mantine/core"

const Navbar = () => {
  return (
    <Box my={15} >
      <Flex align={"center"} justify={"space-between"} >
        <Title order={3}>Welcome To Musican Dashboard </Title>
        <Text></Text>
      </Flex>
    </Box>
  )
}

export default Navbar
