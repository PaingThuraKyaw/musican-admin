import {
  ActionIcon,
  Container,
  Flex,
  Image,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { ReactNode } from "react";
import classes from "./style/auth.module.css";
import cx from "clsx";
import logo from "../assets/logo.png"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Container size={"xl"}>
      <Flex py={10} justify={"space-between"}>
       <Flex gap={5} align={"center"}>
        <Image src={logo} style={{borderRadius : '50%' , width : 40 , height : 40}} />
        <Title order={3} >Musican</Title>
       </Flex>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="md"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Flex>
      <>{children}</>
    </Container>
  );
};

export default AuthLayout;
