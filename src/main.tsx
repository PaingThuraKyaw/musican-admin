import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./style/index.css";
import { MantineProvider } from "@mantine/core";
import Router from "./router.tsx";
import { theme } from "./style/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light" theme={theme}  >
      <Router />
    </MantineProvider>
  </React.StrictMode>
);
