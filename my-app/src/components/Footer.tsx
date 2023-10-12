import { Box, Text, Spacer, Center } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bg="#F2F1E7"
      maxWidth="77vh"
      color="#654534"
      py={50}
      px={6}
      top={0}
      left={0}
      right={0}
      zIndex={1}
      mx="auto"
    >
      <Center marginTop={"30px"}>
        <Text fontFamily={"Coiny"}>
          Ted bar & cafe - 243 Karangahape Road, Auckland CBD, Auckland 1010
        </Text>
      </Center>
      <Spacer margin={"20px"}/>
      <Center marginBottom={"30px"}>
        <Text fontFamily={"Coiny"}>© 2023 Ann & Keshia Ltd. All rights reserved.</Text>
      </Center>
    </Box>
  );
}

export default Footer;
