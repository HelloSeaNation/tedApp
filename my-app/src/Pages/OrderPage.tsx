import { Box, Text, Center, Flex } from "@chakra-ui/react";
import items from "../itemdata.json";
import Card from "../components/Card";
import ReactDOM from "react-dom/client";

const OrderPage = () => {
  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    fontSize: "30px",
    paddingBottom: "50px",
    paddingTop: "30px",
  }; //declaring text styles to avoid repeating code
  const positionStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "center",
    justifyItems: "center",
  }; //place cards in a grid, decreases grid on smaller page
  //gridTemplateColumns: 'repeat(4, 1fr)'
    return (
    <Box bg={"#F2F1E7"}>
      <Center>
        <Flex paddingTop={"15vh"} w={"100vh"} flexDirection={"column"}>
          {/* FoodMenu  */}
          <Text style={textStyles}>Food Menu</Text>
          <Box style={positionStyles}>
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
