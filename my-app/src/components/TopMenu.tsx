import { Box, Flex, Link } from "@chakra-ui/react";
import "@fontsource/coiny";
import CustomButton from "./CustomButton";
import { Link as ScrollLink } from "react-scroll";

function TopMenu() {
  return (
    <Box
      bg="#F2F1E7"
      maxWidth="110vh"
      color="white"
      py={10}
      px={6}
      top={150}
      left={0}
      right={0}
      zIndex={2}
      position="fixed"
      mx="auto"
    >
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        marginTop={"-2vh"}
        marginBottom={"2vh"}
      >
        <ScrollLink // This is the link to the 2nd box
          to="about"
          smooth={true}
          duration={2000}
          offset={-70}
        >
          <CustomButton text="About" to="" />
        </ScrollLink>
        <ScrollLink // This is the link to the 3rd box
          to="menu"
          smooth={true}
          duration={2000}
          offset={-80}
        >
          <CustomButton text="Menu" to="" />
        </ScrollLink>
        <ScrollLink // This is the link to the 4th box
          to="contact"
          smooth={true}
          duration={2000}
          offset={-80}
        >
          <CustomButton text="Contact" to="" />
        </ScrollLink>
        <Link href="/order">
          <CustomButton text="Order" to="" />
        </Link>

        {/* <CustomButton text="Cart" to="/cart" /> */}
      </Flex>
    </Box>
  );
}

export default TopMenu;
