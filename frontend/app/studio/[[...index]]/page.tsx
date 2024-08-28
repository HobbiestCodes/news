"use client";
// To implement the client side studio!

import { NextStudio } from "next-sanity/studio";
import config from "../../../../backend/sanity.config";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function studio() {
  return (
    <ThemeProvider theme={theme}>
    <NextStudio config={config} />;
    </ThemeProvider>
  )
}
