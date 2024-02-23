export interface IProduct {
    name: string
    imgURL?: string
    price: number
    onClick?:({name,imgURL,price}:IProduct)=>void
    view?:"short"|"detail"
}

export function Product({name, imgURL, price,onClick,view="detail"}: IProduct) {

    const handleOnClick=({name,imgURL,price}:IProduct)=>{
        if(onClick){
            onClick({name,imgURL,price})
        }
    }

    if(view==="short"){
        return <div data-testid={`product-${name}`}>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    }

    return (<div data-testid={`product-${name}`} onClick={()=>handleOnClick({name,imgURL,price})}>
        <img src={imgURL} alt={`${name}`}/>
        <div>
            <div>
                <h6>{name}</h6>
                <p>Price : <span>{price}</span></p>
            </div>
            <div>
                <button>Add</button>
            </div>
        </div>
    </div>)
}