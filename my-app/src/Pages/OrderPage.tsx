import { Box, Text, Center, Flex } from "@chakra-ui/react";
import items from "../itemdata.json";
import Card from "../components/Card";

const OrderPage = () => {
  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    fontSize: "30px",
    paddingBottom: "50px",
    paddingTop: "30px",
  }; //declaring text styles to avoid repeating code

  return (
    <Box bg={"#F2F1E7"}>
      <Center>
        <Flex paddingTop={"15vh"} w={{base:"90%", lg:"100vh"}} flexDirection={"column"}>
          {/* FoodMenu  */}
          <Text style={textStyles}>Food Menu</Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            {items.map((item) => (
              <Box key={item.id}>
                {" "}
                <Card {...item} />{" "}
              </Box>
            ))}
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default OrderPage;
