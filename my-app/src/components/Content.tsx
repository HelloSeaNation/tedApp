import { Box, Flex, Center, Text, Button, Image, Stack, Link } from "@chakra-ui/react";
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
            width="106vh"
            height="100vh"
            id="home"
            marginTop="10vh"
          >
            <Image src="src/assets/restaurant1.jpeg" alt="restaurant" />
          </Center>
          {/* Section2 about me */}
          <Flex
            bg="#f2f1e7"
            width="106vh"
            height="100vh"
            id="about"
            justifyContent={"space-between"}
            align={"center"}
            paddingTop={"10vh"}
          >
            <Flex width="65%" flexDirection={"column"}>
              <Stack spacing ={10}>
              <Text
                fontFamily={"Coiny"}
                fontSize={"30px"}
                color={"#654534"}
                marginBottom={"-30px"}
              >
                Meet
              </Text>
        
              <Text fontFamily={"Coiny"} fontSize={"30px"} color={"#654534"}>
                Theodore Hall
              </Text>
             
              <Text fontFamily={"Marmelad"} fontSize={"20px"} color={"#654534"}>
                In the heart of bustling Auckland, New Zealand, where the city's
                energy meets the tranquility of a charming corner, you'll
                discover "Ted's Bar and Cafe." Its warm, inviting atmosphere and
                mouthwatering dishes have made it a cherished destination for
                locals and tourists alike. Steering this culinary ship is none
                other than the enigmatic Theodore Hall, known affectionately as
                Ted. With his salt-and-pepper hair and an ever-present twinkle
                in his eye, Ted is the welcoming face behind this culinary gem.
                As you step inside, you can't help but notice the restaurant's
                distinctive logo – a bear – a symbol that represents not only
                the establishment but also the spirit of this remarkable owner.
              </Text>
              </Stack>
             
            </Flex>
            <Image src="src/assets/bear2.svg" alt="restaurant" width="220px" />
          </Flex>
          {/* Section 3 View Menu */}
          <Flex
            bg="#f2f1e7"
            width="106vh"
            height="100vh"
            id="menu"
            justifyContent={"space-between"}
            align={"center"}
          >
            <Flex flexDirection={"column"}>
              <Text
                fontFamily={"Coiny"}
                fontSize={"70px"}
                color={"#654534"}
                marginBottom={"-2vh"}
                marginTop={"-7vh"}
              >
                MAIN
              </Text>
              <Text fontFamily={"Coiny"} fontSize={"70px"} color={"#654534"}>
                MENU
              </Text>
              <Link href="src/assets/FoodMenu.pdf">
                <Button
                  variant={"outline"}
                  borderColor={"#A17C5F"}
                  border={"none"}
                  borderRadius={"5px"}
                  color={"#A17C5F"}
                  width={"25vh"}
                  height={"7vh"}
                  marginLeft={"7px"}
                  marginTop={"5vh"}
                  textColor={"#654534"}
                  fontFamily={"Coiny"}
                  fontSize={"30px"}
                  outline={"8px solid #A17C5F"}
                  _hover={{ bg: "#A17C5F", color: "#F2F1E7" }}
                  _active={{
                    bg: "#A17C5F",
                    color: "#F2F1E7",
                    transform: "scale(0.8)",
                  }}
                >
                  View Menu
                </Button>{" "}
              </Link>
            </Flex>
            <Image src="src/assets/bearCup.svg" alt="restaurant" width="350px" />
          </Flex>{" "}
          {/* Section 4 Contact */}
          <Flex
            bg="#f2f1e7"
            width="106vh"
            height="100vh"
            id="contact"
            justifyContent={"space-between"}
            align={"center"}
          >
            <Flex flexDirection={"column"}>
              <Text fontFamily={"Coiny"} fontSize={"35px"} color={"#654534"}>
                Address
              </Text>
              <Stack spacing={3}>
              <Text fontSize={"25px"} color={"#654534"}>
                243 Karangahape Road,</Text>
                <Text fontSize={"25px"} color={"#654534"}>
                Auckland CBD,</Text>
                <Text fontSize={"25px"} color={"#654534"}>
                Auckland 1010</Text>
              </Stack>
              <Text
                fontFamily={"Coiny"}
                fontSize={"35px"}
                color={"#654534"}
                marginTop={"4vh"}
              >
                Phone
              </Text>
              <Text fontSize={"25px"} color={"#654534"}>
                027 430 0322
              </Text>
            </Flex>
            <Map width="100%" height="400"/>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Content;
