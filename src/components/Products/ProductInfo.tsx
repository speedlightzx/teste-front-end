import { useState } from "react"
import ProductModal from "../ProductModal/ProductModal"

//interface de produto que tem o caminho da imagem, e as informações restantes de um produto
export interface Product {
    imagePath: string,
    name: string,
    description: string,
    price: number,
}

export default function ProductInfo({ imagePath, name, price, description} : Product) {

    //valor do desconto
    const discount:number = 5

    //calculando o preço da parcela
    const credit = (price:number): number => {
        return Math.floor((price - (price * discount / 100)) / 2)
    }

    //calculando o preço com desconto
    const priceDiscount = (price:number):number => {
        return Math.floor(price - (price * discount / 100))
    }

    //variavel para setar se o modal está aberto ou não
    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
                <div className="productInfo">
                <img src={imagePath} alt="produto" />
                <p className='productName'>
                {name} 
                <br />
                {description}
                </p>
                
                <h1 className="discount">R$ ${price.toLocaleString()}</h1>
                <h1 className='price'>R$ {priceDiscount(price).toLocaleString()}</h1>
                <p className='creditPrice'>ou 2x de R$ {credit(price).toLocaleString()} sem juros</p>
                <p className='tax'>Frete grátis</p>

                <button onClick={() => setModal(true)}>COMPRAR</button>

                
        </div>
{modal && <ProductModal name={name} description={description} imagePath={imagePath} price={priceDiscount(price)} closeModal={() => setModal(false)}/>}
        </>
    )
}