import { Button, Flex, Modal } from "@mantine/core";
import { ReactNode } from "react";

interface ConfirmProp {
  opened: boolean;
  close: () => void;
  children: ReactNode;
  button: {
    title: string;
    message: string;
    btn: string;
  };
}

const ConfirmData = ({ opened, close, children, button }: ConfirmProp) => {
  return (
    <Modal
      zIndex={100}
      opened={opened}
      onClose={close}
      centered
      title={button.title}
    >
      {button.message}
      <Flex gap={10} justify={"end"} mt={5}>
        <Button
          bg="var(--mantine-color-gray-1)"
          size="xs"
          style={{ color: "black" }}
          onClick={close}
        >
          Cancel
        </Button>
        {children}
      </Flex>
    </Modal>
  );
};

export default ConfirmData;
