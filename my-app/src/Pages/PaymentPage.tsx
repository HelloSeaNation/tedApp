import React from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Flex,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../components/cartFunction";
import storeItems from "../itemdata.json";
import SummaryItem from "../components/summaryItem";

interface OrderButtonProps {
  to: string;
}

function PaymentPage({}: OrderButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const buttonStyles = {
    backgroundColor: isHovered ? "#654534" : "#A17C5F",
    color: "white",
    fontSize: "20px",
    fontFamily: "Coiny",
    fontWeight: "normal",
    borderRadius: "50px",
    height: "60px",
    width: "25vh",
    marginTop: "5vh",
  };

  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    paddingTop: "30px",
  };
  const simpleTextStyles = { fontFamily: "sans-serif", color: "#654534" };

  const leftContainer = {
    paddingLeft: "3vh",
  };
  const rightContainer = {
    marginTop: "15.5vh",
    paddingLeft: "3vh",
  };

  const { cartItems } = useShoppingCart();
  const totalPrice = cartItems
    .reduce((total: number, cartItem: { id: number; quantity: number }) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
    .toFixed(2);

  const { clearCart } = useShoppingCart();
  const handleThankYouClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box>
      <Flex
        justifyContent={"center"}
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <Box
          style={leftContainer}
          marginTop={{ base: "0vh", lg: "15vh" }}
          width={{ base: "100%", lg: "52vh" }}
        >
          <Box>
            <Text
              style={textStyles}
              fontSize={{ base: "20px", md: "25px" }}
              paddingBottom={{ base: "10px", lg: "3vh" }}
            >
              Contact Info
            </Text>
          </Box>
          <Stack
            spacing={4}
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2, 1fr)",
            }}
            width={{ base: "94%", md: "85%", lg: "95%" }}
          >
            <Text
              style={simpleTextStyles}
              display={{ base: "none", lg: "block" }}
            >
              Name
            </Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              placeholder={"Name"}
            ></Input>
            <Text
              style={simpleTextStyles}
              display={{ base: "none", lg: "block" }}
            >
              Phone
            </Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              type="tel"
              placeholder="Phone Number"
            />
          </Stack>

          <Box paddingTop="30">
            <Text
              style={textStyles}
              fontSize={{ base: "20px", md: "25px" }}
              paddingBottom={{ base: "10px", lg: "2vh" }}
            >
              Payment
            </Text>
          </Box>
          <Stack
            spacing={4}
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              lg: "repeat(2, 1fr)",
            }}
            width={{ base: "94%", md: "85%", lg: "95%" }}
          >
            <Text
              style={simpleTextStyles}
              display={{ base: "none", lg: "block" }}
            >
              Name On Card
            </Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              placeholder="Name on Card"
            ></Input>

            <Text
              style={simpleTextStyles}
              display={{ base: "none", lg: "block" }}
            >
              Card Number
            </Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              placeholder="Card Number"
              maxLength={19}
            ></Input>
          </Stack>

          <Box
            display="flex"
            marginTop="2vh"
            justifyContent={{ base: "flex-start", lg: "flex-startS" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex width={{ base: "30vh", lg: "23vh" }} alignItems={"center"}>
              <Text style={simpleTextStyles}>EXP</Text>
              <Input
                type="month"
                maxLength={2}
                placeholder="MM"
                name="month/year"
                focusBorderColor="#654534"
                marginLeft={{ base: "10px", lg: "30px" }}
                width={{ base: "25vh", md: "15vh" }}
                style={{
                  borderColor: "#A17C5F",
                }}
              />
            </Flex>
            <Flex
              width={{ base: "20vh", md: "15vh" }}
              alignItems={"center"}
              marginTop={{ base: "2vh", md: "0vh" }}
            >
              <Text style={simpleTextStyles}>CVC(?)</Text>
              <Input
                borderColor="#A17C5F"
                maxLength={3}
                focusBorderColor="#654534"
                marginLeft="10px"
              ></Input>
            </Flex>
          </Box>
        </Box>

        <Box style={rightContainer} width={{ base: "100%", md: "52vh" }}>
          <Text
            style={textStyles}
            fontSize={{ base: "20px", md: "25px" }}
            paddingBottom={{ base: "10px", lg: "2vh" }}
          >
            Order Summary
          </Text>
          <UnorderedList>
            {cartItems.map((item: { id: number; quantity: number }) => (
              <SummaryItem name={""} price={0} key={item.id} {...item} />
            ))}
          </UnorderedList>
          <Input
            borderColor="#A17C5F"
            focusBorderColor="#654534"
            placeholder="Order Notes"
            paddingBottom={"10vh"}
            paddingTop={"2vh"}
            width={{ base: "94%", md:"100%", lg: "50vh" }}
            marginTop={"2vh"}
          ></Input>
          <Text style={textStyles} fontSize={{ base: "20px", md: "25px" }}>
            Order Total ${totalPrice}
          </Text>
        </Box>
      </Flex>
      <Box display="flex" justifyContent="center">
        <Link to="/thank-you">
          <Button
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              clearCart();
              handleThankYouClick();
            }}
          >
            {" "}
            ORDER NOW{" "}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default PaymentPage;
