import {
  Box,
  Flex,
  Spacer,
  Link,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import "@fontsource/coiny";
import DrawerPaw from "./DrawerPaw";
import CartLink from "./CartLink";

function Navbar() {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

  return (
    <Box
      bg="#F2F1E7"
      maxWidth={isSmallerThan480 ? "100%" : "110vh"}
      color="white"
      py={50}
      px={6}
      top={isSmallerThan480 ? "-5" : 0}
      left={isSmallerThan480 ? "-2" : 0}
      right={isSmallerThan480 ? "1" : 0}
      zIndex={1}
      position="fixed"
      mx="auto"
    >
      <Flex>
        <Link href="/">
          <Image src="assets/bear.png" alt="bear" width="60px" height="50px" />
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
