import React from "react";
import { Box, Button, Flex, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartItem } from "../components/cartItem";
import { useShoppingCart } from "../components/cartFunction";
import storeItems from "../itemdata.json";

interface RoutedButtonProps {
  to: string;
}

function CartPage({}: RoutedButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const buttonStyles = {
    backgroundColor: isHovered ? "#654534" : "#A17C5F",
    color: "white",
    fontSize: "25px",
    fontFamily: "Coiny",
    fontWeight: "normal",
    height: "60px",
    width: "200px",
  };
  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    paddingBottom: "1vh",
  };
  const { cartItems, cartQuantity } = useShoppingCart();

  const totalPrice = cartItems
    .reduce((total: number, cartItem: { id: number; quantity: number }) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
    .toFixed(2);

    const handleCartClick = () => {
      window.scrollTo(0, 0);
    };

  const handleClick = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      window.location.href = `/#/cart/payment`;
      handleCartClick();
    }
  };

  return (
    <Flex
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Flex
        marginTop={"11vh"}
        direction={"column"}
        width={{ base: "92%", xl: "100vh" }}
      >
        <Text style={textStyles} paddingTop={{ base: "70px", md: "50px", lg:"60px" }}>
          Cart
        </Text>

        <Stack
          spacing={{ base: 2, lg: 5 }}
          backgroundColor="#FFFFFA"
          padding="2vh"
          width={{ md: "100%", lg: "100vh" }}
          divider={<StackDivider borderColor="#F2F1E7" />}
        >
          {cartItems.length === 0 ? (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{ ...textStyles }}
                fontSize={{ base: "15px", lg: "20px" }}
                paddingTop={{ base: "2vh", lg: "2vh" }}
              >
                No items in the cart.{" "}
                <Link to="/order" style={{ color: "#A17C5F" }}>
                  ORDER HERE
                </Link>
              </Text>
            </Box>
          ) : (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Coiny",
                  color: "#654534",
                }}
                fontSize={{ base: "15px", lg: "20px" }}
              >
                You have {cartQuantity} items in your cart
              </Text>
            </Box>
          )}

          {cartItems.map((item: { id: number; quantity: number }) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>

        <Box display="flex" justifyContent={"flex-end"} marginRight={"3vh"}>
          <Text
            style={textStyles}
            fontSize={{ base: "20px", lg: "30px" }}
            paddingTop={{ base: "3vh", lg: "2vh" }}
          >
            Total = $
          </Text>
          <Text
            style={{ ...textStyles }}
            paddingTop={{ base: "3vh", lg: "2vh" }}
            fontSize={{ base: "20px", lg: "30px" }}
          >
            {totalPrice}
          </Text>
        </Box>
        {/* //this takes the cart items price {if any item in cart} and returns the total of the item price by id times cart quantity */}
      </Flex>

      <Box>
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              style={buttonStyles}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleClick}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default CartPage;
