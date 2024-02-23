import {describe, expect, it, vi} from "vitest";
import {IProduct} from "../src/components/Product";
import {ProductCatalogue} from "../src/components/ProductCatalogue";
import {fireEvent, render, screen, within} from "@testing-library/react";


describe("Product catalogue",()=>{
    const products:IProduct[]=[{name:"Apple",imgURL:"url",price:20}]

    it('should render correct number products', () => {
        const { getAllByTestId } =render(<ProductCatalogue products={products}/>)

        const catalogue = screen.getByRole("list")
        const productElements = getAllByTestId(/product-/);

        expect(catalogue).toBeInTheDocument()
        expect(productElements).toHaveLength(products.length);
    });

    test('onProductClick event passes correct parameters', () => {
        const mockOnClick = vi.fn()

        render(<ProductCatalogue products={products} onProductClick={mockOnClick}/>)

        const catalogue = screen.getByRole("list")
        const product =within(catalogue).getByTestId('product-Apple')

        fireEvent.click(product)

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith({name:"Apple",imgURL:"url",price:20});

    })
})