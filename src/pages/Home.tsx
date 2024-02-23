import { IProduct } from "../components/Product.tsx";
import { ProductCatalogue } from "../components/ProductCatalogue.tsx";
import { useState } from "react";
import { CartItem, ICart } from "../components/CartItem.tsx";

export function Home() {
  const [cart, setCart] = useState<ICart[]>([]);
  const [products, setProduct] = useState([]);

  const handleAddProduct = ({ name, price }: IProduct) => {
    let newCart = [...cart];
    newCart = newCart.map((cart) => {
      if (cart.name === name) {
        return { ...cart, count: ++cart.count };
      }
      return { name, price, count: 1 };
    });
    if (newCart.length === 0) {
      newCart.push({ name, price, count: 1 });
    }
    setCart(newCart);
  };

  const handleSetCount = (type: "add" | "remove", name: string) => {
    let newCart = [...cart];
    newCart = newCart.map((cart) => {
      if (cart.name === name) {
        if (cart.count === 0) {
          return cart;
        }
        return { ...cart, count: type === "add" ? ++cart.count : --cart.count };
      }
      return cart;
    });
    newCart = newCart.filter((cart) => cart.count !== 0);
    setCart(newCart);
  };

  return (
    <main>
      {products && (
        <ProductCatalogue
          products={products}
          onProductClick={handleAddProduct}
        />
      )}

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
      </div>
    </main>
  );
}
