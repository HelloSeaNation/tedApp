import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import "@fontsource/coiny";
import { Link as RouterLink } from "react-router-dom";
import CartLink from "./CartLink";

function DrawerPaw() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const TextStyle: {
    fontFamily: string;
    fontSize: string;
    color: string;
    marginTop: string;
    paddingLeft: string;
  } = {
    fontFamily: "Coiny",
    fontSize: "60px",
    color: "#A17C5F",
    marginTop: "20px",
    paddingLeft: "20px",
  };

  const handleOrderClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Image
        src="assets/paw.png"
        alt="bear"
        width="40px"
        style={{ height: "35px" }}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#f2f1e7"}>
          <Box marginRight={"15vh"}>
            <DrawerHeader
              marginTop={"5vh"}
              paddingRight={"44vh"}
              display={"flex"}
              justifyContent={"right"}
            >
              <Image
                src="assets/paw.png"
                alt="bear"
                width="40px"
                style={{ height: "35px" }}
                onClick={onClose}
              />
              <Box onClick={onClose}>
                   <CartLink />
              </Box>
           
            </DrawerHeader>

            <DrawerBody>
              <Link href="/" onClick={onClose}>
                <Text
                  _hover={{ color: "#654534", cursor: "pointer" }}
                  {...TextStyle}
                >
                  HOME
                </Text>
              </Link>
              <RouterLink
                to="/"
                onClick={() => {
                  onClose(); // Close the drawer
                  setTimeout(() => {
                    const menuElement = document.getElementById("menu");
                    if (menuElement) {
                      const offset = 80;
                      const top =
                        menuElement.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({
                        top,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                <Text
                  _hover={{ color: "#654534", cursor: "pointer" }}
                  {...TextStyle}
                >
                  MENU
                </Text>
              </RouterLink>
              <Link
                href="#/order"
                onClick={() => {
                  handleOrderClick();
                  onClose(); 
                }}
              >
                <Text
                  _hover={{ color: "#654534", cursor: "pointer", textDecoration: "none" }}
                  {...TextStyle}
                >
                  ORDER
                </Text>
              </Link>
              <RouterLink
                to="/"
                onClick={() => {
                  onClose(); // Close the drawer
                  setTimeout(() => {
                    const aboutElement = document.getElementById("about");
                    if (aboutElement) {
                      const offset = 80;
                      const top =
                        aboutElement.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({
                        top,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                <Text
                  _hover={{ color: "#654534", cursor: "pointer" }}
                  {...TextStyle}
                >
                  ABOUT
                </Text>
              </RouterLink>
              <RouterLink
                to="/"
                onClick={() => {
                  onClose(); // Close the drawer
                  setTimeout(() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      const offset = 80;
                      const top =
                        contactElement.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({
                        top,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                <Text
                  _hover={{ color: "#654534", cursor: "pointer" }}
                  {...TextStyle}
                >
                  CONTACT
                </Text>
              </RouterLink>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerPaw;
