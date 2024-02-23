import {describe, expect, it} from "vitest";
import {fireEvent, render, screen, within} from "@testing-library/react";
import {Home} from "../src/pages/Home";
import {IProduct} from "../src/components/Product";


describe("Home page",()=>{
    it('should render home page', () => {
        render(<Home/>)

        const home = screen.getByRole('main')

        expect(home).toBeInTheDocument()
    });

    it('should render correct number products', () => {
        const products:IProduct[]=[{name:"Apple",imgURL:"url",price:20}]

        const { getAllByTestId } =render(<Home products={products}/>)

        const catalogue = screen.getByRole("list")
        const productElements = getAllByTestId(/product-/);

        expect(catalogue).toBeInTheDocument()
        expect(productElements).toHaveLength(products.length);
    });

    it('should render cart item on product add click', () => {
        const products:IProduct[]=[{name:"Apple",imgURL:"url",price:20}]

        const { getByTestId } =render(<Home products={products} />)
        const product = getByTestId("product-Apple")

        fireEvent.click(product)

        const cartItem = getByTestId("cart-Apple")
        const count =within(cartItem).getByTestId("count-Apple")

        expect(cartItem).toBeInTheDocument()
        expect(count).toHaveTextContent(1)
    });
})