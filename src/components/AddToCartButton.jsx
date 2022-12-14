import { ReactComponent as AddCart } from "../SVG/add-cart.svg";
import { getContrast } from "../utils/getContrast";

export const AddToCartButton = ({ color, cartNumber, setCartNumber }) => {
  return (
    <button
      className="addToCart"
      onClick={() => setCartNumber(cartNumber + 1)}
      style={{
        backgroundColor: color,
        color: getContrast(color),
        outline: "1px solid #888",
      }}
    >
      <AddCart fill={getContrast(color)} stroke={getContrast(color)} />
      Ajouter au panier
    </button>
  );
};
