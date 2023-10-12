import React  from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useShoppingCart } from "./cartFunction";

interface CardProps {
  //using props to avoid duplicate code, sticking to DRY
  id: number;
  imgUrl: string;
  price: number;
  name: string;
  //   onAddClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, imgUrl, price, name }: CardProps) => {
  //onAddClick  - add to button
  const textStyles = {
    fontFamily: "Coiny",
    color: "#A17C5F",
    fontSize: "18px",
    paddingBottom: "8vh",
    display: "flex",
  };
  const imageStyles = {
    width: "180px",
    height: "180px",
    border: "6px solid #A17C5F",
    borderRadius: "5px",
  };
  const [isHovered, setIsHovered] = React.useState(false);
  const buttonStyles = {
    backgroundColor: isHovered ? "#654534" : "#A17C5F",
    color: "white",
    fontSize: "15px",
    fontWeight: "normal",
    width: "16vh",
    justifyContent: "center",
  };

  const qualityButtonStyles = {
    backgroundColor: isHovered ? "#654534" : "#A17C5F",
    color: "white",
    fontSize: "15px",
    fontWeight: "normal",
    width: "5vh",
  };

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Box className="card" style={textStyles} flexDirection={"column"}>
      <Image src={imgUrl} style={imageStyles} />
        <Text>{name}</Text>
        <Text>${price}</Text>


      <Box>
        {quantity === 0 ? (
          <Button
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => increaseCartQuantity(id)}
          >
            Add
          </Button>
        ) : (
          <Box display="flex" gap="10px" justifyContent="center">
            <Button
              style={qualityButtonStyles}
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </Button>

            <Box>{quantity}</Box>

            <Button
              style={qualityButtonStyles}
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
