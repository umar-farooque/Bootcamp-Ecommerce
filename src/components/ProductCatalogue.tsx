import { IProduct, Product } from "./Product.tsx";

interface IProductCatalogue {
  products: IProduct[];
  onProductClick?: ({ name, imgURL, price }: IProduct) => void;
}

export function ProductCatalogue({
  products,
  onProductClick,
}: IProductCatalogue) {
  return (
    <ul>
      {products?.map((product) => {
        return (
          <li key={product.name}>
            <Product
              key={product.name}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              onClick={onProductClick}
            />
          </li>
        );
      })}
    </ul>
  );
}
