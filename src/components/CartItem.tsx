import {Product} from "./Product.tsx";

export interface ICart {
    name: string
    price: number
    count: number
}

interface ICartItem extends ICart {
    setCount: (type: "add" | "remove", name: string) => void
}

export function CartItem({name, price, count, setCount}: ICartItem) {
    return <div data-testid={`cart-${name}`}>
        <Product name={name} price={price} view="short"/>
        <div>
            <button data-testid={`add-${name}`} onClick={() => setCount("add", name)}>+</button>
            <p data-testid={`count-${name}`}>{count}</p>
            <button data-testid={`remove-${name}`} onClick={() => setCount("remove", name)}>-</button>
        </div>
    </div>
}