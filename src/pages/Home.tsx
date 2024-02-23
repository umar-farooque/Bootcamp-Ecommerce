import { IProduct } from "../components/Product.tsx";
import { ProductCatalogue } from "../components/ProductCatalogue.tsx";
import { ReactElement, useEffect, useState } from "react";
import { ICart } from "../components/CartItem.tsx";
import { CartProvider, useCart } from "../context/CartContext";
import Cart from "../components/Cart.tsx";

export function Home(): ReactElement {
  const { cart, setCart } = useCart()!;

  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    setProducts([{ name: "Apple", imgURL: "", price: 100 }]);
  }, []);
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

  return (
    <CartProvider>
      <main>
        <ProductCatalogue
          products={products!}
          onProductClick={handleAddProduct}
        />
        <Cart />
      </main>
    </CartProvider>
  );
}
