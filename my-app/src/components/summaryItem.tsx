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
  fontSize: "20px",
  paddingBottom: "50px",
  paddingTop: "30px",
};

// const textStyleItem = {};

export function SummaryItem({ id, quantity }: SummaryItemProps) {
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Box>
      <Flex
        alignItems={"center"}
        width={"50vh"}
        justifyContent={"flex-start"}
        marginLeft={"1vh"}
      >
        <Stack
          spacing={2}
          width={"70vh"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Flex width={"35vh"} flexDirection={"row"} alignItems={"center"}>
            <Box marginRight={"2vh"}>
              <Box style={textStyles2}>{item.name}</Box>
            </Box>
          </Flex>
          <Box style={textStyles2} width={"5vh"}>
            {quantity > 1 && (
              <Box
                style={{
                  fontFamily: "Arial",
                  color: "#A17C5F",
                  fontSize: "18px",
                }}
              >
                {" "}
                x {quantity}
              </Box>
            )}
          </Box>
          <Box>
            {" "}
            <Box style={textStyles2}>
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
