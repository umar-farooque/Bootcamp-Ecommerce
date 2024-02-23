import {fireEvent, render, screen, within} from '@testing-library/react';
import {Product} from "../src/components/Product";
import {expect,vi} from "vitest";


describe('E-Commerce App', () => {
    // TODO remove the playground
    // screen.logTestingPlaygroundURL()

    it('should render product', () => {
        render(<Product name={"Apple"} imgURL={"url"} price={120}/>)
        const product = screen.getByTestId(/product-/)

        const image = within(product).getByRole('img', {
            name: /apple/i
        })
        const name = within(product).getByRole("heading")
        const button = within(product).getByRole('button', {
            name: /add/i
        })

        expect(image).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    });

    test('onClick event passes correct parameters', () => {
        const mockOnClick = vi.fn()

        // Render the Product component with the mock onClick function
        const { getByTestId } = render(<Product  name="Apple"  imgURL="url" price={100}  onClick={mockOnClick}/>)

        fireEvent.click(getByTestId('product-Apple'))

        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith({name:"Apple",imgURL:"url",price:100});
    });
});
