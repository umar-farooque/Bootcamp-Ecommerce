import {describe, expect} from "vitest";
import {IProduct} from "../src/components/Product";
import {fireEvent, render, within} from "@testing-library/react";
import {Home} from "../src/pages/Home";

describe("Cart",()=>{
    it('should add product on add button click', () => {
        const products:IProduct[]=[{name:"Apple",imgURL:"url",price:20}]

        const { getByTestId } =render(<Home products={products} />)
        const product = getByTestId("product-Apple")

        fireEvent.click(product)

        const cartItem =getByTestId('cart-Apple')
        const addButton = within(cartItem).getByTestId("add-Apple")
        const count =within(cartItem).getByTestId("count-Apple")

        fireEvent.click(addButton)
        fireEvent.click(addButton)
        expect(count).toHaveTextContent(3)

    });

    it('should remove product on remove button click', () => {
        const products:IProduct[]=[{name:"Apple",imgURL:"url",price:20}]

        const { getByTestId } =render(<Home products={products} />)
        const product = getByTestId("product-Apple")

        fireEvent.click(product)
        fireEvent.click(product)

        const cartItem =getByTestId('cart-Apple')
        const removeButton = within(cartItem).getByTestId("remove-Apple")
        const count =within(cartItem).getByTestId("count-Apple")

        fireEvent.click(removeButton)
        expect(count).toHaveTextContent(1)



    });
})