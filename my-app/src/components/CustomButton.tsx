// import React from "react";
import { Button } from "@chakra-ui/react";
import "@fontsource/coiny";

interface CustomButtonProps {
  text: string;
  to: string;
}

function CustomButton({ text }: CustomButtonProps) {
  return (
    <Button
      variant={"outline"}
      borderColor={"#A17C5F"}
      border={"none"}
      borderRadius={"5px"}
      color={"#A17C5F"}
      width={"17vh"}
      height={"7vh"}
      textColor={"#654534"}
      fontFamily={"Coiny"}
      fontSize={"25px"}
      outline={"8px solid #A17C5F"}
      _hover={{ bg: "#A17C5F", color: "#F2F1E7" }}
      _active={{ bg: "#A17C5F", color: "#F2F1E7", transform: "scale(0.8)" }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
