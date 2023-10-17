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
  paddingBottom: "10px",
  paddingTop: "10px",
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Box width="100%">
      <Flex alignItems={"center"} width={"100%"} justifyContent={"flex-start"}>
        <Stack>
          <Image
            src={item.imgUrl}
            style={{
              height: "10vh",
              width: "10vh",
              objectFit: "cover",
              borderRadius: "10px",
              border: "4px solid #A17C5F",
            }}
          />
        </Stack>
        <Stack
          spacing={{ base: 2, lg: 10 }}
          width={{ base: "70%", lg: "60vh" }}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          marginLeft={{ base: "2vh", lg: "10vh" }}
          // marginRight={{ base: "2vh", lg: "10vh" }}
        >
          <Box width={{ base: "80%", lg: "25vh" }}>
            <Text
              fontFamily={"Coiny"}
              color={"#A17C5F"}
              fontSize={{ base: "15px", md: "20px" }}
              paddingBottom={"10px"}
              paddingTop={"10px"}
            >
              {item.name}
            </Text>
          </Box>
          <Box>
            {quantity > 1 && (
              <Text
                style={{
                  fontFamily: "Arial",
                  color: "#A17C5F",
                }}
                fontSize={{ base: "15px", lg: "20px" }}
                width={{ base: "100%", lg: "10vh" }}
              >
                {" "}
                x {quantity}
              </Text>
            )}
          </Box>
        </Stack>
        <Flex
          alignItems="center"
          width={{ base: "50%", lg: "10vh" }}
          justifyContent={"flex-end"}
        >
          <Box width={{ base: "65%", lg: "20vh" }}>
            {" "}
            <Text style={textStyles2} fontSize={{ base: "15px", md: "20px" }}>
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
