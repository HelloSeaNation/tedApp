import { Box, Center, Text } from "@chakra-ui/react";
import Map from "../components/Map";
import { useEffect } from "react";

export const ThankYou = () => {
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    window.onpopstate = (event) => {
      alert("You can't go back to the previous page.");
    };
  }, []);
  const textStyles = {
    fontFamily: "Coiny",
    color: "#654534",
    paddingTop: "30px",
  };

  const textStyles2 = {
    fontFamily: "Coiny",
    color: "#654534",
    paddingBottom: "30px",
  };

  return (
    <>
      <Center>
        <Box marginTop={{ base: "17vh", lg: "15vh" }}>
          <Box style={textStyles} fontSize={{ base: "18px", lg: "25px" }}>
            <Text>Thank you for your order!</Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          style={textStyles2}
          fontSize={{ base: "18px", lg: "25px" }}
          width={{ base: "90%" }}
          textAlign={"center"}
        >
          <Text>Your order will be ready to collect in 20 minutes!</Text>
        </Box>
      </Center>

      <Box>
        <Center>
          <Map width="80%" height="380" />
        </Center>
      </Box>
    </>
  );
};

export default ThankYou;
