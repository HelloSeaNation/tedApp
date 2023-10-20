import React from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Flex,
  Text,
  UnorderedList,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../components/cartFunction";
import storeItems from "../itemdata.json";
import SummaryItem from "../components/summaryItem";
import cardValidator from "card-validator";

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

  const [cardNumber, setCardNumber] = React.useState("");
  const [isCheckmarkVisible, setIsCheckmarkVisible] = React.useState(false);
  const [isCardValid, setIsCardValid] = React.useState(false);
  const [cvc, setCVC] = React.useState("");
  const [isCVCValid, setIsCVCValid] = React.useState(false);

  //Validate card number
  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newCardNumber = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    let formattedCardNumber = "";

    for (let i = 0; i < newCardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        // Add a hyphen after every 4th character, but not at the beginning
        formattedCardNumber += "-";
      }
      formattedCardNumber += newCardNumber[i];
    }

    // Limit the card number to 19 characters
    formattedCardNumber = formattedCardNumber.slice(0, 19);

    // Set the input value to the formatted card number
    event.target.value = formattedCardNumber;

    if (formattedCardNumber.length === 19) {
      setIsCheckmarkVisible(true);
    } else {
      setIsCheckmarkVisible(false);
    }

    setCardNumber(formattedCardNumber);

    // Use the CardValidator package to check if the card number is valid
    const cardValidation = cardValidator.number(newCardNumber);
    setIsCardValid(cardValidation.isValid);
  };

  const handleCVCChange = (event: { target: { value: any } }) => {
    const newCVC = event.target.value;
    const cvcRegex = /^[0-9]{3}$/; // CVC should be exactly 3 digits
    const isValid = cvcRegex.test(newCVC);
    setCVC(newCVC);
    setIsCVCValid(isValid);
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
            <InputGroup>
              <Input
                borderColor="#A17C5F"
                focusBorderColor="#654534"
                placeholder="Card Number"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
              ></Input>
              <InputRightElement>
                {isCheckmarkVisible && (
                  <FontAwesomeIcon
                    icon={isCardValid ? faCheck : faXmark}
                    color={isCardValid ? "green" : "red"}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <Text />
            {isCheckmarkVisible && (
              <Text
                style={
                  isCardValid
                    ? { display: "none" }
                    : {
                        marginTop: "-13px",
                        fontFamily: "sans-serif",
                        color: "red",
                        fontSize: "12px",
                      }
                }
              >
                Invalid Card Number
              </Text>
            )}
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
                type="number"
                maxLength={2}
                placeholder="MM/YY"
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
              width={{ base: "35vh", md: "26vh" }}
              alignItems={"center"}
              marginTop={{ base: "2vh", md: "0vh" }}
            >
              <Text style={simpleTextStyles}>CVC(?)</Text>
              <InputGroup>
                <Input
                  borderColor="#A17C5F"
                  maxLength={3}
                  focusBorderColor="#654534"
                  marginLeft="10px"
                  width={{ base: "19vh", md: "15vh" }}
                  value={cvc}
                  onChange={handleCVCChange}
                ></Input>
                <InputRightElement>
                  {isCVCValid && (
                    <FontAwesomeIcon
                      icon={isCardValid ? faCheck : faXmark}
                      color={isCardValid ? "green" : "red"}
                    />
                  )}
                </InputRightElement>
              </InputGroup>
              {isCVCValid && cvc.length === 3 && (
                <Text style={{ color: "red", fontSize: "12px", width:"20vh", marginLeft:"1vh" }}>
                  Invalid CVC
                </Text>
              )}
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
            width={{ base: "94%", md: "100%", lg: "50vh" }}
            marginTop={"2vh"}
          ></Input>
          <Text style={textStyles} fontSize={{ base: "20px", md: "25px" }}>
            Order Total ${totalPrice}
          </Text>
        </Box>
      </Flex>
      <Box display="flex" justifyContent="center" marginTop="5vh">
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
