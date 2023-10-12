import { Box, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { useShoppingCart } from "./cartFunction";
import storeItems from "../itemdata.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type CartItemProps = {
  id: number;
  quantity: number;
};

const textStyles2 = {
  fontFamily: "Coiny",
  color: "#A17C5F",
  fontSize: "20px",
  paddingBottom: "50px",
  paddingTop: "30px",
};

// const textStyleItem = {};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Box>
      <Flex alignItems={"center"} width={"95vh"} justifyContent={"flex-start"}>
        <Stack>
          <Image
            src={item.imgUrl}
            style={{
              height: "15vh",
              width: "15vh",
              objectFit: "cover",
              borderRadius: "10px",
              border: "4px solid #A17C5F",
              marginRight: "10vh",
            }}
          />
        </Stack>
        <Stack
          spacing={2}
          width={"70vh"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Box width={"25vh"}>
            <Text style={textStyles2}>{item.name}</Text>
          </Box>
          <Box>
            {quantity > 1 && (
              <Text
                style={{
                  fontFamily: "Arial",
                  color: "#A17C5F",
                  fontSize: "20px",
                }}
              >
                {" "}
                x {quantity}
              </Text>
            )}
          </Box>
        </Stack>
        <Flex alignItems="center" width="15vh" justifyContent={"flex-end"}>
          <Box width="20vh">
            {" "}
            <Text style={textStyles2}>
              ${(Number(item.price.toFixed(2)) * Number(quantity)).toFixed(2)}
            </Text>
          </Box>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              color: "#A17C5F",
              marginRight: "5px",
            }}
            onClick={() => removeFromCart(item.id)}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default CartItem;
