import { Box, Stack, Flex } from "@chakra-ui/react";
// import { useShoppingCart } from "./cartFunction";
import storeItems from "../itemdata.json";

type SummaryItemProps = {
  id: number;
  quantity: number;
  name: string;
  price: number;
};

const textStyles2 = {
  fontFamily: "Arial",
  color: "#A17C5F",
  paddingBottom: "20px",
  paddingTop: "10px",
};

// const textStyleItem = {};

export function SummaryItem({ id, quantity }: SummaryItemProps) {
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Box>
      <Flex
        alignItems={"center"}
        width={{ base: "100%", md: "50vh" }}
        justifyContent={"flex-start"}
      >
        <Stack
          spacing={2}
          width={"70vh"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Flex
            width={{ base: "75%", md: "35vh" }}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Box marginRight={"2vh"}>
              <Box style={textStyles2} fontSize={{ base: "15px", md: "20px" }}>
                {item.name}
              </Box>
            </Box>
          </Flex>
          <Box
            style={textStyles2}
            fontSize={{ base: "15px", md: "20px" }}
            width={{ base: "5vh", md: "5vh" }}
          >
            {quantity > 1 && (
              <Box
                style={{
                  fontFamily: "Arial",
                  color: "#A17C5F",
                }}
                fontSize={{ base: "14px", md: "18px" }}
              >
                {" "}
                x {quantity}
              </Box>
            )}
          </Box>
          <Box>
            {" "}
            <Box style={textStyles2} fontSize={{ base: "15px", md: "20px" }}>
              ${(Number(item.price.toFixed(2)) * Number(quantity)).toFixed(2)}
            </Box>
          </Box>
        </Stack>
        <Flex
          alignItems="center"
          width="8vh"
          justifyContent={"flex-end"}
        ></Flex>
      </Flex>
    </Box>
  );
}

export default SummaryItem;
