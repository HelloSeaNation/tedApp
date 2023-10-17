import { Box, Flex, Link} from "@chakra-ui/react";
import "@fontsource/coiny";
import CustomButton from "./CustomButton";
import { Link as ScrollLink } from "react-scroll";

function TopMenu() {
  const handleOrderClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      bg="#F2F1E7"
      maxWidth={{base: "100%", md: "100%", xl: "110vh"}}
      color="white"
      py={10}
      px={6}
      top={150}
      left={0}
      right={0}
      zIndex={0}
      position={{base: "absolute", md: "absolute", lg:"fixed", xl: "fixed"}}
      mx="auto"
    >
      <Flex
        direction={{
          base: "column", // For screen widths less than 480 pixels
          md: "column", // For screen widths 480 pixels and larger (default)
          lg:"row", // 1024 til 1280 pixels
          xl: "row", // 1280 til max
        }}
        justifyContent={"space-between"}
        marginTop={"-2vh"}
        alignItems={"center"}
        marginBottom={"1vh"}
      >
        <ScrollLink // This is the link to the 2nd box
          to="about"
          smooth={true}
          duration={2000}
          offset={-30}
        >
          <CustomButton text="About" to="" />
        </ScrollLink>
        <ScrollLink // This is the link to the 3rd box
          to="menu"
          smooth={true}
          duration={2000}
          offset={80}
        >
          <CustomButton text="Menu" to="" />
        </ScrollLink>
        <ScrollLink // This is the link to the 4th box
          to="contact"
          smooth={true}
          duration={2000}
          offset={-50}
        >
          <CustomButton text="Contact" to="" />
        </ScrollLink>
        <Link href="#/order" onClick={handleOrderClick}>
          <CustomButton text="Order" to="" />
        </Link>

        {/* <CustomButton text="Cart" to="/cart" /> */}
      </Flex>
    </Box>
  );
}

export default TopMenu;
