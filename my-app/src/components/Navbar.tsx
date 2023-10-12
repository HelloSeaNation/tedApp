import { Box, Flex, Spacer, Link, Image } from "@chakra-ui/react";
import "@fontsource/coiny";
import DrawerPaw from "./DrawerPaw";
import CartLink from "./CartLink";

function Navbar() {

  return (
    <Box
      bg="#F2F1E7"
      maxWidth="110vh"
      color="white"
      py={50}
      px={6}
      top={0}
      left={0}
      right={0}
      zIndex={1}
      position="fixed"
      mx="auto"
    >
      <Flex>
        <Link href="/">
          <Image
            src="../src/assets/bear.png"
            alt="bear"
            width="60px"
            height="50px"
          />
        </Link>
        <Flex direction={"column"}>
          <Link
            href="/"
            fontFamily={"Coiny"}
            fontSize="40px"
            color="#654534"
            marginLeft={"5px"}
            marginTop={"-6px"}
            marginBottom={"-20px"}
          >
            TED
          </Link>
          <Link
            href="/"
            fontFamily={"Coiny"}
            fontSize="15px"
            color="#654534"
            marginLeft={"10px"}
          >
            bar & café
          </Link>
        </Flex>
        <Spacer />
        <Flex marginTop={"7px"}>
          <DrawerPaw />
          <CartLink />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
