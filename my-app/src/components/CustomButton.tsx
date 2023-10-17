import React from "react";
import { Button } from "@chakra-ui/react";
import "@fontsource/coiny";

interface CustomButtonProps {
  text: string;
  to: string;
  onClick?: () => void;
}

function CustomButton({ text }: CustomButtonProps) {

  return (
    <Button
      variant={"outline"}
      borderColor={"#A17C5F"}
      border={"none"}
      borderRadius={"5px"}
      color={"#A17C5F"}
      width={{
        base: "30vh",
        md: "58vh",
        lg: "17vh",
        xl: "17vh",
      }}
      height={{
        base: "4vh",
        md: "5vh",
        lg: "7vh",
        xl: "7vh",
      }}
      textColor={"#654534"}
      marginBottom={{
        base: "2vh",
        md: "2vh",
        lg: "0",
        xl: "5vh",
      }}
      fontFamily={"Coiny"}
      fontSize={{
        base: "20px",
        md: "25px",
        lg: "25px",
        xl: "25px",
      }}
      outline={{
        base: "3px solid #A17C5F",
        md: "5px solid #A17C5F",
        lg: "8px solid #A17C5F",
        xl: "8px solid #A17C5F",
      }}
      _hover={{ bg: "#A17C5F", color: "#F2F1E7" }}
      _active={{ bg: "#A17C5F", color: "#F2F1E7", transform: "scale(0.8)" }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
