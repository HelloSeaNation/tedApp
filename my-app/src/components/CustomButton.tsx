import React from "react";
import { Button, useMediaQuery } from "@chakra-ui/react";
import "@fontsource/coiny";

interface CustomButtonProps {
  text: string;
  to: string;
  onClick?: () => void;
}

function CustomButton({ text }: CustomButtonProps) {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  // direction={isSmallerThan480 ? "column" : "row"}
  return (
    <Button
      variant={"outline"}
      borderColor={"#A17C5F"}
      border={"none"}
      borderRadius={"5px"}
      color={"#A17C5F"}
      width={isSmallerThan480 ? "25vh" : "17vh"}
      height={isSmallerThan480 ? "3vh" : "7vh"}
      textColor={"#654534"}
      marginBottom={isSmallerThan480 ? "3vh" : "0vh"}
      fontFamily={"Coiny"}
      fontSize={isSmallerThan480 ? "15px" : "25px"}
      outline={"8px solid #A17C5F"}
      _hover={{ bg: "#A17C5F", color: "#F2F1E7" }}
      _active={{ bg: "#A17C5F", color: "#F2F1E7", transform: "scale(0.8)" }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
