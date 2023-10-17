import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import "@fontsource/coiny";
import "@fontsource/marmelad";
import TopMenu from "./TopMenu";
import Map from "./Map";

function Content() {
  return (
    <>
      <TopMenu />
      <Box>
        {/* Section 1 main image */}
        <Flex direction={"column"} alignItems={"center"}>
          <Center
            w="100px"
            bg="#f2f1e7"
            width={{ lg: "95%", xl: "107vh" }}
            height="100vh"
            id="home"
            marginTop="10vh"
          >
            <Image src="assets/restaurant1.jpeg" alt="restaurant" />
          </Center>
          {/* Section2 about me */}
          <Flex
            bg="#f2f1e7"
            width={"90%"}
            maxWidth={{ lg: "100%", xl: "100vh" }}
            height="100vh"
            id="about"
            justifyContent={"space-between"}
            align={"center"}
            paddingTop={{ md: "0", lg: "10vh" }}
          >
            <Flex width={{ md: "80%", lg: "70%" }} flexDirection={"column"}>
              <Stack spacing={{ base: "7", md: "10" }}>
                <Text
                  fontFamily={"Coiny"}
                  fontSize={{ md: "40px", lg: "50px" }}
                  color={"#654534"}
                  marginBottom={"-30px"}
                >
                  Meet
                </Text>

                <Text
                  fontFamily={"Coiny"}
                  fontSize={{ md: "40px", lg: "50px" }}
                  color={"#654534"}
                >
                  Theodore Hall
                </Text>

                <Text
                  fontFamily={"Marmelad"}
                  fontSize={{ base: "15px", md: "20px", lg: "25px" }}
                  color={"#654534"}
                >
                  In the heart of bustling Auckland, New Zealand, where the
                  city's energy meets the tranquility of a charming corner,
                  you'll discover "Ted's Bar and Cafe." Its warm, inviting
                  atmosphere and mouthwatering dishes have made it a cherished
                  destination for locals and tourists alike. Steering this
                  culinary ship is none other than the enigmatic Theodore Hall,
                  known affectionately as Ted. With his salt-and-pepper hair and
                  an ever-present twinkle in his eye, Ted is the welcoming face
                  behind this culinary gem. As you step inside, you can't help
                  but notice the restaurant's distinctive logo – a bear – a
                  symbol that represents not only the establishment but also the
                  spirit of this remarkable owner.
                </Text>
              </Stack>
            </Flex>
            <Image
              src="assets/bear2.svg"
              alt="restaurant"
              width={"220px"}
              display={{ base: "none", md: "block" }}
            />
          </Flex>
          {/* Section 3 View Menu */}
          <Flex
            bg="#f2f1e7"
            width={"90%"}
            maxWidth={{ base: "100%", xl: "100vh" }}
            height="100vh"
            id="menu"
            justifyContent={{ base: "center", md: "space-evenly" }}
            align={"center"}
            direction={{ base: "column-reverse", md: "row" }}
            paddingTop={{ base: "20vh", md: "0" }}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"normal"}
              alignItems={"center"}
            >
              <Text
                fontFamily={"Coiny"}
                fontSize={{ base: "40px", md: "70px" }}
                color={"#654534"}
                marginBottom={"-2vh"}
              >
                MAIN
              </Text>
              <Text
                fontFamily={"Coiny"}
                fontSize={{ base: "40px", md: "70px" }}
                color={"#654534"}
              >
                MENU
              </Text>
              <Link href="FoodMenu.pdf">
                <Button
                  variant={"outline"}
                  borderColor={"#A17C5F"}
                  border={"none"}
                  borderRadius={"5px"}
                  color={"#A17C5F"}
                  width={{ base: "30vh", md: "20vh" }}
                  height={{ base: "7vh", md: "5vh" }}
                  marginLeft={"7px"}
                  marginTop={{ base: "5vh", md: "2vh" }}
                  textColor={"#654534"}
                  fontFamily={"Coiny"}
                  fontSize={{ base: "30", md: "40px" }}
                  outline={{ base: "3px solid", md: "8px solid #A17C5F" }}
                  _hover={{ bg: "#A17C5F", color: "#F2F1E7" }}
                  _active={{
                    bg: "#A17C5F",
                    color: "#F2F1E7",
                    transform: "scale(0.8)",
                  }}
                >
                  Menu
                </Button>{" "}
              </Link>
            </Flex>
            <Image
              src="assets/bearCup.svg"
              alt="restaurant"
              width={{ base: "180px", md: "350px" }}
              marginBottom={{ base: "2vh", md: "0" }}
            />
          </Flex>{" "}
          {/* Section 4 Contact */}
          <Flex
            bg="#f2f1e7"
            width={"90%"}
            maxWidth={{ lg: "100%", xl: "100vh" }}
            height="100vh"
            id="contact"
            justifyContent={{ base: "center", md: "space-between" }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
          >
            <Flex flexDirection={"column"}>
              <Text
                fontFamily={"Coiny"}
                fontSize={{ base: "20px", md: "35px" }}
                color={"#654534"}
              >
                Address
              </Text>
              <Stack spacing={{ base: "1", md: "-32" }}>
                <Text fontSize={{ base: "15px", md: "25px" }} color={"#654534"}>
                  243 Karangahape Road,
                </Text>
                <Text fontSize={{ base: "15px", md: "25px" }} color={"#654534"}>
                  Auckland CBD,
                </Text>
                <Text fontSize={{ base: "15px", md: "25px" }} color={"#654534"}>
                  Auckland 1010
                </Text>
              </Stack>
              <Text
                fontFamily={"Coiny"}
                fontSize={{ base: "20px", md: "35px" }}
                color={"#654534"}
                marginTop={{ base: "2vh", md: "4vh" }}
              >
                Phone
              </Text>
              <Text
                fontSize={{ base: "15px", md: "25px" }}
                color={"#654534"}
                marginBottom={{ base: "4vh", md: "0" }}
              >
                027 430 0322
              </Text>
            </Flex>
            <Map width="70%" height="30vh" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Content;
