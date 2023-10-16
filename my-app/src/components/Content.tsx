import {
  Box,
  Flex,
  Center,
  Text,
  Button,
  Image,
  Stack,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import "@fontsource/coiny";
import "@fontsource/marmelad";
import TopMenu from "./TopMenu";
import Map from "./Map";

function Content() {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

  return (
    <>
      <TopMenu />
      <Box>
        {/* Section 1 main image */}
        <Flex direction={"column"} alignItems={"center"}>
          <Center
            w="100px"
            bg="#f2f1e7"
            width={isSmallerThan480 ? "35vh" : "106vh"}
            height="100vh"
            id="home"
            marginTop="10vh"
          >
            <Image src="assets/restaurant1.jpeg" alt="restaurant" />
          </Center>
          {/* Section2 about me */}
          <Flex
            bg="#f2f1e7"
            width={isSmallerThan480 ? "90%" : "106vh"}
            height="100vh"
            id="about"
            justifyContent={"space-between"}
            align={"center"}
            paddingTop={isSmallerThan480 ? "0" : "10vh"}
          >
            <Flex
              width={isSmallerThan480 ? "100%" : "65%"}
              flexDirection={"column"}
            >
              <Stack spacing={10}>
                <Text
                  fontFamily={"Coiny"}
                  fontSize={isSmallerThan480 ? "20px" : "30px"}
                  color={"#654534"}
                  marginBottom={"-30px"}
                >
                  Meet
                </Text>

                <Text
                  fontFamily={"Coiny"}
                  fontSize={isSmallerThan480 ? "20px" : "30px"}
                  color={"#654534"}
                >
                  Theodore Hall
                </Text>

                <Text
                  fontFamily={"Marmelad"}
                  fontSize={isSmallerThan480 ? "15px" : "30px"}
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
              display={isSmallerThan480 ? "none" : "block"}
            />
          </Flex>
          {/* Section 3 View Menu */}
          <Flex
            bg="#f2f1e7"
            width={isSmallerThan480 ? "90%" : "106vh"}
            height="100vh"
            id="menu"
            justifyContent={"space-evenly"}
            align={"center"}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={isSmallerThan480 ? "space-between" : "normal"}
            >
              <Text
                fontFamily={"Coiny"}
                fontSize={isSmallerThan480 ? "30px" : "70px"}
                color={"#654534"}
                marginBottom={"-2vh"}
                marginTop={"-7vh"}
              >
                MAIN
              </Text>
              <Text
                fontFamily={"Coiny"}
                fontSize={isSmallerThan480 ? "30px" : "70px"}
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
                  width={isSmallerThan480 ? "14vh" : "25vh"}
                  height={isSmallerThan480 ? "3vh" : "7vh"}
                  marginLeft={"7px"}
                  marginTop={isSmallerThan480 ? "3vh" : "5vh"}
                  textColor={"#654534"}
                  fontFamily={"Coiny"}
                  fontSize={isSmallerThan480 ? "15px" : "30px"}
                  outline={isSmallerThan480 ? "3px solid" : "8px solid #A17C5F"}
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
            <Image
              src="assets/bearCup.svg"
              alt="restaurant"
              width={isSmallerThan480 ? "180px" : "350px"}
              marginBottom={isSmallerThan480 ? "5vh" : "0"}
            />
          </Flex>{" "}
          {/* Section 4 Contact */}
          <Flex
            bg="#f2f1e7"
            width={isSmallerThan480 ? "90%" : "106vh"}
            height="100vh"
            id="contact"
            justifyContent={isSmallerThan480 ? "center" : "space-between"}
            align={"center"}
            direction={isSmallerThan480 ? "column" : "row"}
          >
            <Flex flexDirection={"column"}>
              <Text
                fontFamily={"Coiny"}
                fontSize={isSmallerThan480 ? "20px" : "35px"}
                color={"#654534"}
              >
                Address
              </Text>
              <Stack spacing={3}>
                <Text
                  fontSize={isSmallerThan480 ? "15px" : "25px"}
                  color={"#654534"}
                >
                  243 Karangahape Road,
                </Text>
                <Text
                  fontSize={isSmallerThan480 ? "15px" : "25px"}
                  color={"#654534"}
                >
                  Auckland CBD,
                </Text>
                <Text
                  fontSize={isSmallerThan480 ? "15px" : "25px"}
                  color={"#654534"}
                >
                  Auckland 1010
                </Text>
              </Stack>
              <Text
                fontFamily={"Coiny"}
                fontSize={isSmallerThan480 ? "20px" : "35px"}
                color={"#654534"}
                marginTop={isSmallerThan480 ? "0 " : "4vh"}
              >
                Phone
              </Text>
              <Text
                fontSize={isSmallerThan480 ? "15px" : "25px"}
                color={"#654534"}
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
