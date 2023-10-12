import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "./cartFunction";
import { Link, Box } from "@chakra-ui/react";

function CartLink() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Link href="/cart">
      <FontAwesomeIcon
        icon={faShoppingCart}
        onClick={openCart}
        style={{
          color: "#654534",
          width: "35px",
          height: "35px",
          marginLeft: "20px",
          marginTop: "3px",
          position: "relative",
        }}
      />
      <Box className="cart-count" style={{
        display: cartQuantity === 0 ? "none" : "block",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        textAlign: "center",
        fontSize: "12px",
        fontWeight: "bold",
        lineHeight: "20px",
        marginTop: "-20px",
        marginLeft: "40px",
        position: "relative",
      }}>
        {cartQuantity}
      </Box>
    </Link>
  );
}

export default CartLink;