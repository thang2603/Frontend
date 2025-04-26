"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Slider = () => {
  return (
    <Flex>
      <Box mx="auto">
        <Image
          src="/home/slider_2.webp"
          alt="Người mẫu"
          width={1920}
          height={600}
          style={{
            width: "100vw", // full width màn hình
            height: "auto",
            objectFit: "cover", // tùy chọn: crop đẹp
          }}
        />
      </Box>
    </Flex>
  );
};

export default Slider;
