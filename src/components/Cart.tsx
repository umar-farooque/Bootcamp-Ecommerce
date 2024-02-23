import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

export default function Cart() {
  let { cart, setCart } = useCart()!;

  const handleSetCount = (type: "add" | "remove", name: string) => {
    let newCart = [...cart];
    newCart = newCart.map((cart) => {
      if (cart.name === name) {
        if (cart.count === 0) {
          return cart;
        }
        return {
          ...cart,
          count: type === "add" ? ++cart.count : --cart.count,
        };
      }
      return cart;
    });
    newCart = newCart.filter((cart) => cart.count !== 0);
    setCart(newCart);
  };
  return (
    <div>
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <CartItem
              key={product.name}
              setCount={handleSetCount}
              name={product.name}
              price={product.price}
              count={product.count}
            />
          );
        })}
      <p datatest-id="cart-total">0</p>
    </div>
  );
}
