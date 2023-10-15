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
  };

  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    fontSize: "25px",
    paddingBottom: "50px",
    paddingTop: "30px",
  };
  const simpleTextStyles = { fontFamily: "sans-serif", color: "#654534" };

  const leftContainer = { width: "52vh", marginTop: "15vh", marginLeft: "5vh" };
  const rightContainer = {
    width: "52vh",
    marginTop: "15vh",
    marginLeft: "5vh",
  };

  const monthInputRef = React.useRef(null);
  const yearInputRef = React.useRef(null);
  const [showWarning, setShowWarning] = React.useState(false);

  const handleMonthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, "");

    // Ensure the value is between 1 and 12
    if (Number(inputValue) > 12 || Number(inputValue) < 0) {
      inputValue = "";
      setShowWarning(true); // Show warning when value is greater than 12
    } else {
      setShowWarning(false); // Hide warning when value is within 1-12
    }

    // Move focus to the year input when 2 digits are entered
    if (inputValue.length === 2 && yearInputRef.current) {
      (yearInputRef.current as HTMLInputElement).focus();
    }

    // Update the input value
    e.target.value = inputValue;
  };

  const { cartItems } = useShoppingCart();
  const totalPrice = cartItems
    .reduce((total: number, cartItem: { id: number; quantity: number }) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
    .toFixed(2);

  const { clearCart } = useShoppingCart();

  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Box style={leftContainer}>
          <Box>
            <Text style={textStyles}>Contact Info</Text>
          </Box>
          <Stack
            spacing={4}
            display="grid"
            gridTemplateColumns={"repeat(2, 1fr)"}
            maxWidth="600"
          >
            <Text style={simpleTextStyles}>Name</Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              width="35vh"
            ></Input>
            <Text style={simpleTextStyles}>Number</Text>

            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              type="tel"
            />
          </Stack>

          <Box paddingTop="30">
            <Text style={textStyles}>Payment</Text>
          </Box>
          <Stack
            spacing={4}
            display="grid"
            gridTemplateColumns={"repeat(2, 1fr)"}
            maxWidth="600"
          >
            <Text style={simpleTextStyles}>Name On Card</Text>
            <Input
              borderColor="#A17C5F"
              focusBorderColor="#654534"
              width="35vh"
            ></Input>

            <Text style={simpleTextStyles}>Card Number</Text>
            <Input borderColor="#A17C5F" focusBorderColor="#654534"></Input>
          </Stack>

          <Box display="flex" marginTop="2vh" justifyContent={"space-between"}>
            <Flex width="23vh" alignItems={"center"}>
              <Text style={simpleTextStyles}>EXP</Text>
              <Input
                ref={monthInputRef}
                type="text"
                maxLength={2}
                placeholder="MM"
                name="month"
                onChange={handleMonthInput}
                focusBorderColor="#654534"
                style={{
                  borderColor: "#A17C5F",
                  marginLeft: "30px",
                  width: "8vh",
                }}
              />
              <Text marginLeft={"10px"}>/</Text>
              <Input
                ref={yearInputRef}
                type="text"
                maxLength={2}
                placeholder="YY"
                name="year"
                focusBorderColor="#654534"
                style={{
                  borderColor: "#A17C5F",
                  marginLeft: "10px",
                  width: "8vh",
                }}
              />
            </Flex>
            <Flex width="20vh" alignItems={"center"}>
              <Text style={simpleTextStyles}>CVC(?)</Text>
              <Input
                borderColor="#A17C5F"
                focusBorderColor="#654534"
                marginLeft="10px"
              ></Input>
            </Flex>
          </Box>
          {showWarning && (
            <Box style={{ color: "red", marginTop: "1vh" }}>
              Month should be between 1 and 12.
            </Box>
          )}
        </Box>

        <Box style={rightContainer}>
          <Text style={textStyles}>Order Summary</Text>
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
            width={"50vh"}
            marginTop={"2vh"}
          ></Input>
          <Text style={textStyles}>Order Total ${totalPrice}</Text>
          <Box display="flex" justifyContent="center">
            <Link to="/thank-you">
              <Button
                style={buttonStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  clearCart();
                }}
              >
                {" "}
                ORDER NOW{" "}
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default PaymentPage;
