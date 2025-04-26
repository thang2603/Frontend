"use client";
import { Flex, useDisclosure } from "@chakra-ui/react";

import React from "react";
import MobileHeader from "./MobileHeader";

const TopHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex width={"100vw"}>
      <MobileHeader />
    </Flex>
  );
};

export default TopHeader;
