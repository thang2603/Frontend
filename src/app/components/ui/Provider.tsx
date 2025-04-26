"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ReactNode } from "react";
interface DataTypeProps {
  children: ReactNode;
}
const Provider = ({ children }: DataTypeProps) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default Provider;
