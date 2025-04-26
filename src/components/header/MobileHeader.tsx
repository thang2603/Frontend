"use client";

import { Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const MobileHeader = () => {
  return (
    <Flex flex={1} justifyContent={"space-between"} alignItems={"center"}>
      <Flex gap={1} alignItems={"center"}>
        <Icon size={"lg"}>
          <AiOutlineMenu />
        </Icon>
        <Icon size={"lg"}>
          <AiOutlineSearch />
        </Icon>
      </Flex>
      <Image
        src="/logo.webp"
        alt="Next.js logo"
        width={170}
        height={60}
        priority
      />
      <Flex gap={1} alignItems={"center"}>
        <Icon size={"lg"}>
          <AiOutlineHeart />
        </Icon>
        <Icon size={"lg"}>
          <AiOutlineUser />
        </Icon>
        <Icon size={"lg"}>
          <AiOutlineShoppingCart />
        </Icon>
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
