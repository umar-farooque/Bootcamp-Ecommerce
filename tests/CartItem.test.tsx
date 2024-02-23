import {describe, expect, vi} from "vitest";
import {fireEvent, render, within} from "@testing-library/react";
import {CartItem} from "../src/components/CartItem";



describe("Cart item",()=>{
    it('should render cart item', () => {
        const{getByTestId}=render(<CartItem setCount={()=>{}} name={"Apple"} price={100} count={1}/>)

        const cartItem =getByTestId('cart-Apple')

        expect(cartItem).toBeInTheDocument()

    });

    it('set count passes correct parameters ', () => {
        const mockOnClick = vi.fn()

        const{getByTestId}=render(<CartItem setCount={mockOnClick} name={"Apple"} price={100} count={1}/>)

        const cartItem =getByTestId('cart-Apple')

        const addButton = within(cartItem).getByTestId("add-Apple")

        fireEvent.click(addButton)
        fireEvent.click(addButton)

        expect(mockOnClick).toHaveBeenCalledTimes(2);

        expect(mockOnClick).toHaveBeenCalledWith("add","Apple");
    });
})